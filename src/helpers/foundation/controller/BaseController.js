const AutoBindContext = require('./AutoBindContextMixin')
const ControllerMiddleware = require('./ControllerMiddlewareMixin')
const {mixin} = require('../utils/mixin')

const _apiResponse = require('../response/ApiResponse')

class BaseController extends mixin([/*ControllerMiddleware,*/ AutoBindContext]) {
    constructor({apiResponse = _apiResponse} = {}) {
        super();
        this.apiResponse = apiResponse
    }
}

module.exports = BaseController