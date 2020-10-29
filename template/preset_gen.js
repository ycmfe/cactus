class Preset {
  config = { plugins: {} }

  constructor(_config = {}) {
    this.config = Object.assign(this.config, _config)
  }

  addProperty(name, value) {
    this.config[name] = value
    return this
  }

  addPlugin(pluginName, options = {}, condition = null) {
    if (typeof condition === 'function' && !condition()) return
    this.config.plugins[pluginName] = options
    return this
  }

  toJsonStr() {
    return JSON.stringify(this.config)
  }
}

module.exports = Preset
