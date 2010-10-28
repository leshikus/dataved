#!/bin/sh

set -evx
. "$DDIR"/config.sh

#
# Generic Functions
#
function error() {
  echo "$1"
  exit 1
}

function get_timestamp() {
  date '+%d%H%M%S'
}

function set_tmp_file_name() {
  TMP_FILE="$DDIR"/tmp/"$1".`get_timestamp`
}

add_line() {
  grep -Fx "$1" "$2" || echo "$1" >>"$2"
}

# 0 if the file was not downloaded
function rm_subdir() {
  test -d "$DDIR/$1" || error "No such dir: $1"
  test -n "$1" || error "Empty subdir: $1"
  test -n "$2" || error "Empty subdir: $2"
  RDD="$DDIR/$1"/"$2"
  test -d "$RDD" || return 0 # no need to remove empty directory
  touch "$RDD" || error "No permission to modify: $RDD"
  rm -rf "$RDD"
}

#
# Dependence Download & Build Utilities
#
function get_dist_dir() {
  DIST="$DDIR/timestamp/$1"

  case "$DIST" in
  *.bz2)
    tar -jtf "$DIST" | head -1
    ;;
  *.tgz | *.tar.gz)
    tar -ztf "$DIST" | head -1
    ;;
  *)
    return 1
  esac
}

function unpack_dist() {
  DIST="$DDIR/timestamp/$1"

  case "$DIST" in
  *.bz2)
    tar -jxf "$DIST" -C "$DDIR"/dist
    ;;
  *.tgz | *.tar.gz)
    tar -zxf "$DIST" -C "$DDIR"/dist
    ;;
  esac
}

function build_dist() {
  DIST_DIR="$1"
  test -n "$DIST_DIR" || error "Empty DIST_DIR"
  (
    cd "$DDIR/dist/$DIST_DIR"
    test -f "configure" && ./configure --prefix="$DDIR"/usr
    test -f "Makefile" && {
      make
      make install prefix="$DDIR"/usr
    }
  )
}

function test_dist() {
  (
    cd "$DDIR/dist/$DIST_DIR"
    make check
  )
}

function wget_newer() {
  set_tmp_file_name wget_dist_err
  (
    cd "$DDIR"/timestamp
    wget -N "$1" 2>"$TMP_FILE"
  )
  
  fgrep "Server file no newer than local file" "$TMP_FILE"
}

function check_sig() {
  DIST_NAME="$1"
  DIST_SIG="$2"
  case "$DIST_SIG" in
    sig)
      gpg --verify "$DIST_NAME"."$DIST_SIG"
      ;;
  esac
}

function wget_dist() {
  DIST="$1"
  DIST_NAME=`basename "$DIST"`
  DIST_SIG="$2"

  if wget_newer "$DIST"
  then
    return 0
  fi

  test -z "$DIST_SIG" || (
    cd "$DDIR"/timestamp
    wget "$DIST"."$DIST_SIG"
    check_sig "$DIST_NAME" "$DIST_SIG"
  )

  DIST_DIR=`get_dist_dir "$DIST_NAME"` || return 0
  rm_subdir dist "$DIST_DIR"
  unpack_dist "$DIST_NAME"
  build_dist "$DIST_DIR"
}

function gnuget_dist() {
  wget_newer "$GNU_URL/gnu-keyring.gpg" || {
    gpg --import "$DDIR"/timestamp/gnu-keyring.gpg
  }
  wget_dist "$GNU_URL/$1" sig
}

function get_git_dist_dir() {
  echo "$1" | perl -n -e '/(\w+).git$/ && print $1'
}

function git_dist() {
  GIT_DIST="$1"
  CHECK_DIST="$2"
  sh "$DDIR"/util/get_git.sh

  DIST_DIR=`get_git_dist_dir "$GIT_DIST"`
  (
    if test -d "$DDIR/dist/$DIST_DIR/.git"
    then
      cd "$DDIR/dist/$DIST_DIR"
      git checkout | grep '' || return 0 # no changes
      git checkout . # revert changes
      git clean -xdf # delete untracked and ignored files
    else
      cd "$DDIR/dist"
      rm_subdir dist "$DIST_DIR"
      git clone "$GIT_DIST"
    fi
    build_dist "$DIST_DIR"
    test_dist  "$DIST_DIR"
  )
}

function set_ssh_port() {
  PORT="Port $SSH_PORT"
  CONFIG="$HOME"/.ssh/config

  add_line "$PORT" "$CONFIG"
}

function update_dist() {
  set_ssh_port

  DIST="$1"
  DIST_NAME=`basename "$DIST"`

  rsync -lptDzv "$SSH_ID:$DIST" "$DDIR"/timestamp |
    fgrep "$DIST_NAME" || return 0

  rsync -rLptDzv "$SSH_ID:$DIST" "$DDIR"/dist
}

function add_path() {
  fgrep -x "$1" "$DDIR/tmp/path.txt" || echo "$1" >>"$DDIR/tmp/path.txt"
  sed -e 's/^/PATH="$PATH":/; s/\n/:/' "$DDIR/tmp/path.txt" >"$DDIR/tmp/set_path.sh"
}

#
# Replace the installation script with the tool
#
function exec_tool() {
  NAME=`basename "$0"`
  LOC=`which "$NAME"`
  test "$LOC" == "$DDIR/bin/$NAME" ||
    exec "$LOC" "$@"
}
