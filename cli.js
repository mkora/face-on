#!/usr/bin/env node
const dotenv = require('dotenv');
const meow = require('meow');

dotenv.load({
  path: '.env',
});

const {
  getAction,
  makeAction,
} = require('./actions');

const {
  log,
  warn,
} = require('./utils/chalk-init');

/**
 * Init CLI object
 *  + add non-flag arguments
 *  + add flags (options) and its descriptions
 */
const cli = meow(`
  Usage:
    $ ava <input>

  Input:
    get             Get a random image
    make            Build an avatar from scratch

  Examples:
    $ ava make

  Other options:
    --help           Show usage information
    --version        Print version info and exit
  `);

/**
 * Main Part
 * (code here)
 */
if (cli.input[0] === undefined) {
  log(cli.help);
  process.exit();
}

const action = cli.input[0];
const opts = cli.flags;

if (action === 'get') {
  getAction(opts);
} else if (action === 'make') {
  makeAction(opts);
} else {
  warn('Missed action. Not sure what to do next');
}
