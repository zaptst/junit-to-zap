#!/usr/bin/env node
'use strict';
const meow = require('meow');
const junitToZap = require('./');

const cli = meow({
  help: `
    Usage
      $ ... | junit-to-zap
  `,
});

process.stdin
  .pipe(junitToZap.stream())
  .pipe(process.stdout);
