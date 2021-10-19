const combineMiddlewares = require('../helpers/CombineMiddlewares')
const isFunction = require('../helpers/utils/isFunction')

class Controller {
    #middlewares = [];
    constructor() {
        return new Proxy(this, {
            get: (controller, target) => {
                if (isFunction(controller[target])) {
                    return combineMiddlewares.combine([
                        ...this.#middlewares.filter(({only = [], expect = []}) => {
                            return only.length ? only.includes(target) : !expect.includes(target)
                        }).map(({handler}) => handler),

                        controller[target].bind(controller)
                    ])
                }

                return controller[target]
            },
            set: (controller, target, value) => {
                if(isFunction(value))
                    throw new TypeError('fields of the controller cannot be assigned functions')

                return controller[target] = value
            }
        });
    }

    middleware (handler, options) {
        this.#middlewares.push({... options, handler})
    }
}

module.exports = Controller;