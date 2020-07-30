module.exports = [
  {
    name: 'packageManager',
    type: 'list',
    message: '选择 package manager:',
    default: 'npm',
    choices: [
      {
        name: 'yarn',
        value: 'yarn',
        short: 'yarn',
      },
      {
        name: 'npm',
        value: 'npm',
        short: 'npm',
      },
      {
        name: 'pnpm',
        value: 'pnpm',
        short: 'pnpm',
      },
    ],
  },
  {
    name: 'historyMode',
    type: 'list',
    message: '选择路由模式:',
    default: 'history',
    choices: [
      {
        name: 'history',
        value: 'history',
        short: 'history',
      },
      {
        name: 'hash',
        value: 'hash',
        short: 'hash',
      },
    ],
  },
]
