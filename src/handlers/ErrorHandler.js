const Handler = require("./Handler")

class ErrorHandler extends Handler {
    handler(err, req, res, next) {
        this.apiResponse.errorRes(res, err, err.message)
    }
}

module.exports = new ErrorHandler