    const {isFunction} = require("../utils/isFunction");

    const AutoBindContextMixin = mix => class AutoBindContext extends mix {
        constructor() {
            super();
            return new Proxy(this, {
                get: (instance, target) => {
                    if (isFunction(instance[target]))
                        return async function (req, res, next) {
                            try {
                                await instance[target].call(instance, req, res, next)
                            } catch (error) {
                                console.log(111);
                                next(error)
                            }
                        }

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