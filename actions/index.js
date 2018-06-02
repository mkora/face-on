const fs = require('fs');
const os = require('os');
const path = require('path');
const mkdir = require('make-dir');
const inquirer = require('inquirer');
const terminalImage = require('terminal-image');
const axios = require('axios');
const {
  error,
  warn,
  success,
  debug,
  log,
} = require('../utils/chalk-init');
const getQuestions = require('../questions/get');
const makeQuestions = require('../questions/make');
const config = require('../config');

const homedir = os.homedir();

const getAvatar = async (url, filename, show = false) => {
  const folder = path.join(homedir, config.DEFAULT_FOLDER);
  debug(`Let's make an API call to ${url}`);

  const res = await axios({
    method: 'get',
    url,
    responseType: 'stream',
  });

  const folderPath = await mkdir(folder);
  const filePath = path.join(folderPath, filename);

  res.data.pipe(fs
    .createWriteStream(filePath)
    .on('finish', async () => {
      if (show) {
        log(await terminalImage.file(filePath));
      }
      success(`Image was saved to ${filePath}`);
      log(`You can also access avatar at ${url}`);
    }));
};

const getAction = async (opts) => {
  debug(opts);
  try {
    const answers = await inquirer.prompt(getQuestions);
    debug(answers);
    if (answers.id) {
      const filename = `${answers.id}.png`;
      const url = `${config.API_URL}${answers.size}/${filename}`;
      await getAvatar(url, filename, answers.showPic);
    } else {
      warn('Something went wrong');
    }
  } catch (err) {
    error(err);
  }
};

const makeAction = async (opts) => {
  debug(opts);
  try {
    const answers = await inquirer.prompt(makeQuestions);
    debug(answers);

    if (answers.id && answers.eyes
      && answers.nose && answers.mouth) {
      const filename = `${answers.id}.png`;
      const url = `${config.API_URL}face/${answers.eyes}/${answers.nose}/${answers.mouth}/${answers.color}`;
      await getAvatar(url, filename, answers.showPic);
    } else {
      warn('Something went wrong');
    }
  } catch (err) {
    error(err);
  }
};

module.exports = {
  getAction,
  makeAction,
};
