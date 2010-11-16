#!/bin/sh

# Environment functions
function quote_space() {
  sed -e 's/ /\\ /g'
}

# Working directories
DDIR=`cd "$DDIR"; pwd -P`
QDIR=`echo "$DDIR" | quote_space`
mkdir -p "$DDIR"/dist "$DDIR"/timestamp "$DDIR"/tmp "$DDIR"/usr/bin

# Run an upper level config if any
if test -f "$DDIR"/../config.sh
then
  . "$DDIR"/../config.sh
fi
  
# Defaults
USER=${USER:-hudson}
LANG=

# Software URL Bases
GNU_URL=${GNU_URL:-http://mirrors.kernel.org/gnu}

# Calculated varaibles
SSH_ID=${SSH_ID:-$USER@$SSH_SERVER}
SSH_PORT=${SSH_PORT:-22}
SVN_SSH="ssh -p $SSH_PORT"

ARCH=`arch`
if test "$ARCH" = i686
then
  ARCH_BITS=32
elif test "$ARCH" = x86_64
then
  ARCH_BITS=64 
fi
  
PATH="$DDIR/usr/bin:$DDIR/bin:/bin:/usr/bin" # installed tools have a priority
LDFLAGS="-L$QDIR/usr/lib"
CPPFLAGS="-I$QDIR/usr/include"
LD_LIBRARY_PATH="$DDIR/usr/lib"

export LANG PATH LDFLAGS CPPFLAGS LD_LIBRARY_PATH SVN_SSH

