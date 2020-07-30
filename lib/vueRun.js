const execa = require('execa')

module.exports = function vueRun(argv) {
  execa.command('vue', argv.slice(2))
}
