const userInfo = require('./data/user')
const enumList = require('./data/enumList')
const demo = require('./data/demo')

let data = {}

module.exports = Object.assign(
    data,
    demo,
    userInfo,
    enumList,
)
