const testFilename = require('../utils/filename-regex');

module.exports = [
  {
    type: 'input',
    name: 'id',
    message: 'Identifier:',
    validate: (value) => {
      if (value && testFilename(value)) {
        return true;
      }
      return 'Please enter a valid identifier name';
    },
    default: 'file@user.name',
  },
  {
    type: 'input',
    name: 'size',
    message: 'Size of a picture (in px):',
    validate: (value) => {
      const parsed = parseFloat(value);
      return !isNaN(parseFloat(parsed)) // eslint-disable-line no-restricted-globals
        || 'Please enter a number';
    },
    default: 285,
    filter: Number,
  },
];
