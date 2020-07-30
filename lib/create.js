const { error, stopSpinner } = require('@vue/cli-shared-utils')
const execa = require('execa')
const inquirer = require('inquirer')
const ejs = require('ejs')
const originPreset = require('../template/preset.json')

async function create(projectName, options) {
  const answer = await inquirer.prompt(require('./prompts'))
  const preset = ejs.render(JSON.stringify(originPreset), answer)

  let command = `vue create ${projectName} --packageManager=${answer.packageManager} --inlinePreset=${preset} `
  execa.command(command, {
    stdio: 'inherit',
  })
}

module.exports = (...args) => {
  return create(...args).catch((err) => {
    stopSpinner(false)
    error(err)
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1)
    }
  })
}
