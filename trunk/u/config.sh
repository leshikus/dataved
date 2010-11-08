#!/bin/sh

# Defaults
USER=${USER:-hudson}
LANG=

# Software URL Bases
GNU_URL=${GNU_URL:-http://mirrors.kernel.org/gnu}

# Calculated varaibles
SSH_ID=${SSH_ID:-$USER@$SSH_SERVER}

DDIR=`cd "$DDIR"; pwd -P`
QDIR=`echo "$DDIR" | sed -e 's/ /\\ /g'`
  
ARCH=`arch`
if test "$ARCH" = i686
then
  ARCH_BITS=32
elif test "$ARCH" = x86_64
then
  ARCH_BITS=64 
fi
  
PATH="$DDIR/usr/bin:$DDIR/bin:$PATH" # installed tools have a priority
LDFLAGS="-L$QDIR/usr/lib"
CPPFLAGS="-I$QDIR/usr/include"
LD_LIBRARY_PATH="$DDIR/usr/lib"

export LANG PATH LDFLAGS CPPFLAGS LD_LIBRARY_PATH

