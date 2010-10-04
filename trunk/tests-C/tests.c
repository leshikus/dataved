#error "This file is not for direct compilation, use `gen-int defs.c`"

test hello() {
    printf("hello\n");
}

test crash() {
    int *p = NULL;
    *p = 1;
}
