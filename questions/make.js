const validFilename = require('../utils/validate-filename');
const validHex = require('../utils/validate-hex');

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
    type: 'list',
    name: 'eyes',
    message: 'Choose eyes:',
    choices: [
      'eyes1',
      'eyes2',
      'eyes3',
      'eyes4',
      'eyes5',
      'eyes6',
      'eyes7',
      'eyes9',
      'eyes10',
    ],
  },
  {
    type: 'list',
    name: 'nose',
    message: 'Choose nose:',
    choices: [
      'nose2',
      'nose3',
      'nose4',
      'nose5',
      'nose6',
      'nose7',
      'nose8',
      'nose9',
    ],
  },
  {
    type: 'list',
    name: 'mouth',
    message: 'Choose mouth:',
    choices: [
      'mouth1',
      'mouth3',
      'mouth5',
      'mouth6',
      'mouth7',
      'mouth9',
      'mouth10',
      'mouth11',
    ],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Input a color (RGB):',
    validate: (value) => {
      if (value && validHex(value)) {
        return true;
      }
      return 'Please enter a valid color';
    },
    default: 'ffffff',
  },
];
