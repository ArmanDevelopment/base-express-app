const Controller = require("../Controller");

class AuthController extends Controller {
    async login (req, res) {
        throw new Error("Authorization error")
    }
}

module.exports = new AuthController