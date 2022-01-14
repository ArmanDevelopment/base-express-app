let {isFunction} = require("../utils/isFunction")
let _apiResponse = require("../response/ApiResponse")

class BaseHandler {

    constructor({apiResponse = _apiResponse} = {}) {
        this.apiResponse = apiResponse
        return new Proxy(this, {
            get: (instance, target) => {
                if(isFunction(instance[target]))
                    return instance[target].bind(instance)

                return instance[target]
            }
        })
    }

    handler(req, res, next) {
        throw new Error("Method not implemented")    
    }
}

module.exports = BaseHandler