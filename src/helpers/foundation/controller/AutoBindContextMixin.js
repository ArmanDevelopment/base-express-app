const {isFunction} = require("../utils/isFunction");

const AutoBindContextMixin = mix => class AutoBindContext extends mix {
    constructor() {
        super();
        return new Proxy(this, {
            get: (instance, target) => {
                if (isFunction(instance[target]))
                    return instance[target].bind(instance)

                return instance[target]
            },
            set: (instance, target, value) => {
                if(isFunction(value))
                    throw new TypeError('fields of the controller cannot be assigned functions')

                return instance[target] = value
            }
        });
    }
}

module.exports = AutoBindContextMixin