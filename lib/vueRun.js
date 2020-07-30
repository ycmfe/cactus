const { error } = require('@vue/cli-shared-utils')
const execa = require('execa')

module.exports = function vueRun(argv) {
  let command = argv.slice(2)
  command.unshift('./node_modules/.bin/vue-cli-service')
  execa
    .command(command.join(' '), {
      stdio: 'inherit',
    })
    .catch((err) => {
      error(err)
    })
}
