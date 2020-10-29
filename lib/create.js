/*
 * @Author: LiZheGuang
 * @Date: 2020-09-18 12:07:21
 * @LastEditors: LiZheGuang
 * @LastEditTime: 2020-10-23 18:57:50
 * @FilePath: /cactus/lib/create.js
 */
const { error, stopSpinner } = require('@vue/cli-shared-utils')
const execa = require('execa')
const inquirer = require('inquirer')
const ejs = require('ejs')
const originPreset = require('../template/preset')

async function create(projectName, options) {
  const answer = await inquirer.prompt(require('./prompts'))
  const preset = JSON.stringify(JSON.parse(ejs.render(originPreset, answer)))
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
