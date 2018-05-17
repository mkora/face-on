const inquirer = require('inquirer');

const {
  error, // eslint-disable-line no-unused-vars
  warn, // eslint-disable-line no-unused-vars
  success, // eslint-disable-line no-unused-vars
  debug, // eslint-disable-line no-unused-vars
  log,
} = require('../utils/chalk-init');

const testFilename = require('../utils/filename-regex');

/**
 * Init promting question object
 * for mo options see Inquirer documentation
 */
const getQuestions = [
  {
    type: 'input',
    name: 'identifier',
    message: 'Please, enter identifier',
    validate: (value) => {
      if (testFilename(value)) {
        return true;
      }
      return 'Please enter a valid identifier name';
    },
  },
  {
    type: 'input',
    name: 'size',
    message: 'Please, provide a size of a pic (in px)',
    validate: (value) => {
      const parsed = parseFloat(value);
      return !isNaN(parseFloat(parsed)) || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'radius',
    message: 'Please, provide a border radius (%)',
    validate: (value) => {
      const parsed = parseFloat(value);
      return !((isNaN(parsed) || parsed < 0 || parsed > 100)) || 'Please enter a valid number';
    },
    filter: Number,
  },
];

const getAction = (opts) => {
  debug(JSON.stringify(opts, null, '  '));

  log('Get a rand ava');
  success('Done');
};

const makeAction = (opts) => {
  debug(JSON.stringify(opts, null, '  '));

  log('Make your ava!');
  success('Done');
};


module.exports = {
  getAction,
  makeAction,
};
