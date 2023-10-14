const buildedModule = require('./dist/node')

if (typeof process !== "undefined") {
  if(Object.keys(buildedModule).length === 1 && buildedModule.hasOwnProperty) {
    module.exports = buildedModule.default
  } else {
    module.exports = buildedModule
  }
} else {
  throw new Error('Please use "/dist/broswer.js for broswer version"')
}