/*
 * @Author: LiZheGuang
 * @Date: 2020-09-18 12:07:21
 * @LastEditors: LiZheGuang
 * @LastEditTime: 2020-10-23 18:40:33
 * @FilePath: /cactus/lib/prompts.js
 */
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
]
