const Controller = require("../Controller");

class AuthController extends Controller {
    async login (req, res, next) {
        throw new Error("message jjjjjjjjjjjjjjjjjjjjjjjj")
    }
}

module.exports = new AuthController