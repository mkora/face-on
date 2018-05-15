const meow = require('meow');
const {
  error, // eslint-disable-line no-unused-vars
  warn, // eslint-disable-line no-unused-vars
  success, // eslint-disable-line no-unused-vars
  debug, // eslint-disable-line no-unused-vars
  log,
} = require('./utils/chalk-init');
const inquirer = require('inquirer');

/**
 * Init CLI object
 *  + add non-flag arguments
 *  + add flags (options) and its descriptions
 */
const cli = meow(`
  Usage:
    $ node cli.js <input> [options]
    $ ava <input> [options]

  Input:
    get             Get a random image,
                    (prompt: identifier[.png] size border-radius)
    make            Build an avatar from scratch
                    (prompt: eyes nose mouth color)

  Options:
    -f, --file      Save an avatar to a file,
                    by default it outputs to stdout & prints the link

  Examples:
    $ ava make --file='avatar.png'

  Other options:
    --help           Show usage information
    --version        Print version info and exit
  `, {
  flags: {
    file: {
      type: 'string',
      alias: 'f',
      default: 'avatar.png',
    },
  },
});

/**
 * Reacts on cli input and options
 *
 * @param {string} action   first non-flag argument
 * @param {object} flags    flag values
 */
const actions = (action, flags) => {
  const { file } = flags;
  if (action === 'get') {
    log('Get a rand ava');
    success('Done');
  } else if (action === 'make') {
    log('Make your ava!');
    success('Done');
  } else {
    warn('Missed action. Not sure what to do next.');
  }
};

/**
 * Main Part
 * (code here)
 */
if (cli.input[0] === undefined) {
  log(cli.help);
  process.exit();
}

actions(cli.input[0], cli.flags);

