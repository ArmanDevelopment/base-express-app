
function isFunction(fun) {
    return typeof fun == 'function' && !fun.toString().split('{')[0].trim().includes('class')
}

module.exports = isFunction;