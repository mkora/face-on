const dotenv = require('dotenv');
const chalk = require('chalk');
const logSymbols = require('log-symbols');

dotenv.load({
  path: '.env',
});

const logIt = require('console-log-level')({ level: process.env.LOG_LEVEL });

const error = msg => logIt.error(`${logSymbols.error} ${chalk.bold.red(msg)}`);
const warn = msg => logIt.warn(`${logSymbols.warning} ${chalk.keyword('orange')(msg)}`);
const success = msg => logIt.info(`${logSymbols.success} ${chalk.bold.green(msg)}`);
const debug = msg => logIt.debug(`${logSymbols.info} ${chalk.gray(msg)}`);
const log = msg => console.log(chalk.white(msg));

module.exports = {
  error,
  warn,
  success,
  debug,
  log,
};
