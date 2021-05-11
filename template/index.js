const Preset = require('./preset_gen')

const preset = new Preset({ bare: true, useConfigFiles: true })

exports.getPreset = function getPreset(options) {
  preset
    .addProperty('cssPreprocessor', options.cssPreprocessor)

    .addPlugin('@ycmfe/vue-cli-plugin-cactus-base')
    .addPlugin('@vue/cli-plugin-babel')
    .addPlugin('@vue/cli-plugin-typescript', {
      classComponent: true,
      useTsWithBabel: true,
    })
    .addPlugin('@vue/cli-plugin-vuex')
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-router', {
      historyMode: options.historyMode,
    })
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-tailwind')
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-eslint', {
      config: 'alloy',
      lintOn: ['save', 'commit'],
    })
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-commitlint')
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-stylelint')
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-vw', {}, () => {
      return options.toViewport
    })
    .addPlugin('@ycmfe/vue-cli-plugin-cactus-points', {
      buryPoints: options.buryPoints
    })

  return preset.toJsonStr()
}
