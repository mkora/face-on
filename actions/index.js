const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const {
  error, // eslint-disable-line no-unused-vars
  warn, // eslint-disable-line no-unused-vars
  success, // eslint-disable-line no-unused-vars
  debug, // eslint-disable-line no-unused-vars
  log,
} = require('../utils/chalk-init');
const getQuestions = require('../questions/get');
const config = require('../config');

const getAction = (opts) => {
  debug(opts);

  inquirer.prompt(getQuestions).then((answers) => {
    debug(answers);

    if (answers.id) {
      const filename = `${answers.id}.png`;
      const url = `${config.API_URL}${answers.size}/${filename}`;
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
    } else {
      warn('Something went wrong');
    }
  });
};

const makeAction = (opts) => {
  debug(opts);

  log('Make your ava!');
  success('Done');
};


module.exports = {
  getAction,
  makeAction,
};
