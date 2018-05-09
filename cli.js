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
    $ util <input> [options]

  Input:
    shout

  Options:
    -t, --text TEXT   text for trasformation

  Examples:
    $ util shout --text='Oh, no!'

  Other options:
    --help            show usage information
    --version         print version info and exit    
  `, {
  flags: {
    text: {
      type: 'string',
      alias: 't',
      default: 'Shut up, Meg!',
    },
  },
});

/**
 * Init promting question object
 * for mo options see Inquirer documentation
 */
const questions = [
  {
    type: 'confirm',
    name: 'sure',
    message: 'Are you sure you want to shout?',
    default: true,
  },
];

/**
 * Reacts on cli input and options
 *
 * @param {string} action   first non-flag argument
 * @param {object} flags    flag values
 */
const actions = (action, flags) => {
  if (action === 'shout') {
    const { text } = flags;
    if (text) {
      const output = text.toUpperCase();
      log(output);
    } else {
      log(text);
    }
    success('Done');
  } else {
    warn('Missed action. Not sure what to do');
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

inquirer.prompt(questions).then((answers) => {
  debug(JSON.stringify(cli, null, '  '));
  debug(JSON.stringify(answers, null, '  '));

  if (answers.sure) {
    actions(cli.input[0], cli.flags, cli.help);
  } else {
    success('Good boy!');
  }
});

