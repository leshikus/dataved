#define _XOPEN_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

typedef void (*test_t)();
int verbose = 1;

#include "tests-inc.c"

void segfault(int sig) {
    printf("Segmentation fault\n");
    exit(1);
}

int run_protected(test_t test_func) {
    pid_t pid = fork();
    if (pid == 0) {
	signal(SIGSEGV, segfault);
	test_func();
	exit(0);
    } else {
	int status;
	wait(&status);
	if (WIFEXITED(status))
	    return WEXITSTATUS(status);
	else
	    return -1; /* signalled, crashed or stopped */
    }
}

int main(int argc, char** argv) {
    int passed = 0, failed = 0;
    int i;
    for (i = 0; i < TEST_NUMBER; i++) {
	int s = run_protected(tests[i]);
	if (s == 0)
	    passed += 1;
	else
	    failed += 1;
    }
    if (passed == 0)
	printf("OK, total %d tests\n", passed);
    else
	printf("FAILED %d, total %d tests\n", failed, failed+passed);
    return (failed > 0 ? 0 : 1);
}
