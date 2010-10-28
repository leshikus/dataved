#!/bin/sh

# Defaults
USER=${USER:-hudson}
LANG=

# Software URL Bases
GNU_URL=${GNU_URL:-http://mirrors.kernel.org/gnu}

# Calculated varaibles
SSH_ID=${SSH_ID:-$USER@$SSH_SERVER}

DDIR=`cd "$DDIR"; pwd -P`
  
ARCH=`arch`
if test "$ARCH" = i686
then
  ARCH_BITS=32
elif test "$ARCH" = x86_64
then
  ARCH_BITS=64 
fi
  
PATH="$DDIR/usr/bin:$DDIR/bin:$PATH" # installed tools have a priority
export LANG PATH

