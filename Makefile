SHELL := /bin/bash

test:
    @find test -name *_test.js -type f | xargs -tn1 node

.PHONY: test