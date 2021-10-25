const {isConditionalMiddleware, getHandler, combine} = require("../middlewares/MiddlewareHelper");
const {isFunction} = require("../utils/isFunction");

const ControllerMiddlewareMixin = mix => class ControllerMiddleware extends mix{
    _middlewares = [];

    constructor() {
        super()
        return new Proxy(this, {
            get: (instance, target) => {
                if (isFunction(instance[target]))
                    return combine([
                        ...this._middlewares.filter(isConditionalMiddleware(target)).map(getHandler),

                        instance[target]
                    ])

                return instance[target]
            }
        });
    }

    middleware (handler, options = {}) {
        this._middlewares.push({... options, handler})

        return this
    }
}

module.exports = ControllerMiddlewareMixin