

class Helper {
    getHandler ({handler}) {
        return handler
    }

    isConditionalMiddleware(target) {
        return ({only = [], except = []}) => only.length ? only.includes(target) : !except.includes(target)
    }
}

module.exports = new Helper