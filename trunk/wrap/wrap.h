/*
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

#ifndef WRAP_H_
#define WRAP_H_

#include <stdarg.h>
#include <stdlib.h>
#include <stdio.h>

#define PTRACE(format, value) printf("# trace %s: " format "\n", \
  __func__, value); 
//#define PTRACE(format, value) value;

static int
_fscanf(FILE *stream, const char *format, ...) {
  va_list arg;
  int done;

  PTRACE("format = %s", format);
  PTRACE("file position = %li", ftell(stream));
  va_start(arg, format);
  done = vfscanf(stream, format, &arg);
  va_end(arg);

  va_start(arg, format);
  const char *f;
  char *s;

  for (f = format; *f; f++) {
    if (*f != '%') continue;
    do {
      f++;
      switch (*f) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          continue;
        case 'i':
          PTRACE("int = %i", *va_arg(arg, int*));
          break;
        case 'f':
          PTRACE("double = %f", *va_arg(arg, double*));
          break;
        case 's':
          s = va_arg(arg, char*);
          PTRACE("string first word = %i", *s);
          PTRACE("string length = %i", strlen(s));
          PTRACE("string content = %s", s);
          break;
        case '*': break;
        case 0: f--;
      }
      break;
    } while (1);
  }
  va_end(arg);
  PTRACE("result = %d", done);

  return done;
}



static void *
_malloc(size_t size) {
  static malloc_count = 0;
  void *ptr;
  PTRACE("allocating %li bytes", size);

  ptr = malloc(size);
  if (ptr) {
    PTRACE("allocated at %p !ignore", ptr);
    PTRACE("allocated memory %i times", ++malloc_count);
  } else {
    PTRACE("cannot allocate %li bytes", size);
  }
  return ptr;
}

static void
_free(void *ptr) {
  static free_count = 0;
  PTRACE("freeing at %p !ignore", ptr);
  free(ptr);
  PTRACE("freed memory %i times", ++free_count);
}


#define fscanf _fscanf
#define malloc _malloc
#define free _free

#endif  // WRAP_H_

