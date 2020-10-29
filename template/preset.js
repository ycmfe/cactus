/*
 * @Author: LiZheGuang
 * @Date: 2020-09-18 12:07:21
 * @LastEditors: LiZheGuang
 * @LastEditTime: 2020-10-23 18:59:25
 * @FilePath: /cactus/template/preset.js
 */
module.exports = `{
  "bare": true,
  "useConfigFiles": true,
  "plugins": {
    "@ycmfe/vue-cli-plugin-cactus-base": {},
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-typescript": {
      "classComponent": true,
      "useTsWithBabel": true
    },
    "@vue/cli-plugin-vuex": {},
    "@ycmfe/vue-cli-plugin-cactus-router": {
      "historyMode": "<%= historyMode %>"
    },
    "@ycmfe/vue-cli-plugin-cactus-tailwind": {},
    "@ycmfe/vue-cli-plugin-cactus-eslint": {
      "config": "alloy",
      "lintOn": ["save", "commit"]
    },
    "@ycmfe/vue-cli-plugin-cactus-commitlint": {},
    "@ycmfe/vue-cli-plugin-cactus-stylelint":{}
    <% if (toViewport) { %>
    ,"@ycmfe/vue-cli-plugin-cactus-vw":{}
    <% } %>
  },
  "cssPreprocessor": "dart-sass"
}`
