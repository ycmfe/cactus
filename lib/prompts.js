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
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: '选择CSS预处理器',
    default: 'dart-sass',
    choices: [
      {
        name: 'sass',
        value: 'sass',
        short: 'sass',
      },
      {
        name: 'dart-sass',
        value: 'dart-sass',
        short: 'dart-sass',
      },
      {
        name: 'node-sass',
        value: 'node-sass',
        short: 'node-sass',
      },
      {
        name: 'less',
        value: 'less',
        short: 'less',
      },
      {
        name: 'stylus',
        value: 'stylus',
        short: 'stylus',
      },
    ],
  },
  {
    name: 'toViewport',
    type: 'list',
    message: '是否集成postcss-px-to-viewport',
    default: false,
    choices: [
      {
        name: true,
        value: true,
        short: true,
      },
      {
        name: false,
        value: false,
        short: false,
      },
    ],
  },
  {
    name: 'buryPoints',
    type: 'list',
    message: '是否使用埋点插件:',
    default: false,
    choices: [
      {
        name: true,
        value: true,
        short: true,
      },
      {
        name: false,
        value: false,
        short: false,
      },
    ],
  },
]
