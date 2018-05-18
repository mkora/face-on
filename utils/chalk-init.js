const dotenv = require('dotenv');
const chalk = require('chalk');
const logSymbols = require('log-symbols');

dotenv.load({
  path: '.env',
});

const logIt = require('console-log-level')({
  level: process.env.LOG_LEVEL,
});

const tpl = require('./tpl-str');

const error = msg =>
  logIt
    .error(chalk
      .bold
      .red(tpl`${logSymbols.error} ${msg}`));

const warn = msg =>
  logIt
    .warn(chalk
      .keyword('orange')(tpl`${logSymbols.warning} ${msg}`));

const success = msg =>
  logIt
    .info(chalk
      .bold
      .green(tpl`${logSymbols.success} ${msg}`));

const debug = msg =>
  logIt
    .debug(chalk
      .gray(tpl`${logSymbols.info} ${msg}`));
const log = msg =>
  console.log(chalk
    .white(tpl`${msg}`));

module.exports = {
  error,
  warn,
  success,
  debug,
  log,
};
