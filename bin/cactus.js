#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')

// prettier-ignore
program
  .version(`@ycmfe/cactus-cli ${require('../package').version}`)
  .usage('<command> [options]')

// prettier-ignore
program
  .command('create <app-name>')
  .description('创建一个新项目')
  .action((name, cmd) => {
    const options = cleanArgs(cmd)

    require('../lib/create')(name, options)
  })

// prettier-ignore
program
  .command('serve [entry]')

// prettier-ignore
program
  .command('build [entry]')

// prettier-ignore
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    suggestCommands(cmd)
  })

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`cactus <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.commands.forEach((c) => c.on('--help', () => console.log()))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

function cleanArgs(cmd) {
  const args = {}
  cmd.options.forEach((o) => {
    const key = camelize(o.long.replace(/^--/, ''))

    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== undefined) {
      args[key] = cmd[key]
    }
  })
  return args
}
