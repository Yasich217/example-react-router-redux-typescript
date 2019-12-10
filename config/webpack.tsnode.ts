/**
 * Файл используется для того, чтобы завёлся typescript.
 */
require('ts-node').register({
  project: __dirname + '/tsconfig.webpack.tsnode.json'
});

module.exports = require('./webpack.config').default;
