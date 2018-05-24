const validFilename = require('../utils/validate-filename');

module.exports = [
  {
    type: 'input',
    name: 'id',
    message: 'Enter an identifier:',
    validate: (value) => {
      if (value && validFilename(value)) {
        return true;
      }
      return 'Please enter a valid identifier name';
    },
    default: 'file@user.name',
  },
  {
    type: 'input',
    name: 'size',
    message: 'Enter a size of a picture (in px):',
    validate: (value) => {
      const parsed = parseFloat(value);
      return !isNaN(parseFloat(parsed)) // eslint-disable-line no-restricted-globals
        || 'Please enter a number';
    },
    default: 285,
    filter: Number,
  },
];
