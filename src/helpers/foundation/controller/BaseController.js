const AutoBindContext = require('./AutoBindContextMixin')
const ControllerMiddleware = require('./ControllerMiddlewareMixin')
const ControllerParent = require('./ControllerParentMixin')
const {mixin} = require('../utils/mixin')

const apiResponse = require('../response/ApiResponse')

class BaseController extends mixin([ControllerParent, ControllerMiddleware, AutoBindContext]) {
    constructor({apiResponse = apiResponse} = {}) {
        super();
        this.apiResponse = apiResponse
    }
}

module.exports = BaseController.buildController()