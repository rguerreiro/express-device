#!/usr/bin/env node
nodeunit = require('nodeunit').reporters.default;
nodeunit.run(['test']);

// to take advantage of using cloud9 ide test convention. it runs all *_test.js