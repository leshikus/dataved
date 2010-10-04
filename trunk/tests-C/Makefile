PROGRAMS = run-test
TESTS = run-test
LINK = $(CC) -o $@ $(LDFLAGS) $+ $(LDLIBS)

all: $(PROGRAMS)

test: $(TESTS) $(PROGRAMS) $(LIBS)
	@for test in $(TESTS); do echo $$test; ./$$test; done

run-test: main.o
	$(LINK)

GENERATED += tests-inc.c
main.o: tests-inc.c
tests-inc.c: tests.c gen-tests-inc
	./gen-tests-inc $< > $@

clean:
	$(RM) *.o *.d $(PROGRAMS) $(GENERATED)

## Dependencies
SOURCE := $(wildcard *.c)
OBJECTS := $(SOURCE:.c=.o)
-include $(OBJECTS:.o=.d)
CPPFLAGS := $(CPPFLAGS) -MMD
# catch broken dependencies
%.h: ;
