const path = require('path')
const axios = require('axios')
const { resolvePkg, chalk, semver } = require('@vue/cli-shared-utils')

const error = chalk.bold.red

function cleanVersion(version) {
  return semver.valid(semver.coerce(version))
}

module.exports = async function genCDN() {
  try {
    console.log(path.join(process.cwd(), 'package.json'))
    const pkg = resolvePkg(process.cwd())
    const dependencies = pkg.dependencies || {}
    const cdnListUrl = 'http://10.8.8.253:8015/api/v1/static'

    const cdnResponse = await axios.get(cdnListUrl)
    const cdnList = cdnResponse.data || []

    const externalConfig = Object.keys(dependencies)
      .map((key) => {
        const moduleVersion = cleanVersion(dependencies[key])
        const moduleName = key
        const cdnModuleInfos = cdnList
          .map((x) => {
            return { ...x, version: cleanVersion(x.version) }
          })
          .sort((a, b) => {
            // 倒序排列
            if (semver.gt(a, b)) return -1
            else if (semver.lt(a, b)) return 1
            else return 0
          })
        let targetModule = cdnModuleInfos.find((m) => {
          if (m.version === moduleVersion) {
            return true
          }
        })
        if (cdnModuleInfos.length > 0 && !targetModule) {
          // 如果没有找到，则默认为最高版本
          targetModule = cdnModuleInfos[0]
        }
        return cdnModuleInfos
      })
      .filter(Boolean)
      .map((x) => {
        return {
          name: x.name,
          path: x.url,
        }
      })

    console.log('cdnList', cdnList)
  } catch (err) {
    console.log(error(`cdn列表接口需要在内网中使用，请注意网络环境`))
  }
}

// genCDN()

const res = ['1.2.3', '2.3.4', '1.0.0']

console.log(
  res.sort((prev, next) => {
    if (semver.gt(prev, next)) return -1
    else if (semver.lt(prev, next)) return 1
    else return 0
  })
)
// console.log(semver.satisfies('42.6.7', '42.6.7'))
// console.log(semver.valid(semver.coerce('problem-1.2.3')))
