const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const {
  error, // eslint-disable-line no-unused-vars
  warn, // eslint-disable-line no-unused-vars
  success, // eslint-disable-line no-unused-vars
  debug, // eslint-disable-line no-unused-vars
  log, // eslint-disable-line no-unused-vars
} = require('../utils/chalk-init');
const getQuestions = require('../questions/get');
const makeQuestions = require('../questions/make');
const config = require('../config');

const getAvatar = (url, filename) => {
  const folder = config.DEFAULT_FOLDER;
  debug(`Let's make an API call to ${url}`);

  axios({
    method: 'get',
    url,
    responseType: 'stream',
  })
    .then((res) => {
      res.data.pipe(fs.createWriteStream(`${folder}${filename}`));
      success(`Image was saved to ${folder}${filename}`);
    })
    .catch((err) => {
      error(err);
    });
  log(`You can also access avatar at ${url}`);
};

const getAction = (opts) => {
  debug(opts);

  inquirer.prompt(getQuestions).then((answers) => {
    debug(answers);
    if (answers.id) {
      const filename = `${answers.id}.png`;
      const url = `${config.API_URL}${answers.size}/${filename}`;
      getAvatar(url, filename);
    } else {
      warn('Something went wrong');
    }
  });
};

const makeAction = (opts) => {
  debug(opts);

  inquirer.prompt(makeQuestions).then((answers) => {
    debug(answers);
    if (answers.id && answers.eyes
      && answers.nose && answers.mouth) {
      const filename = `${answers.id}.png`;
      const url = `${config.API_URL}face/${answers.eyes}/${answers.nose}/${answers.mouth}/${answers.color}`;
      getAvatar(url, filename);
    } else {
      warn('Something went wrong');
    }
  });
};

module.exports = {
  getAction,
  makeAction,
};
