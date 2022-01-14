const express = require('express')
const router = express.Router()
const authController = require("../controllers/user/AuthConrtroller")

router./*post*/get("/login", authController.login)

module.exports = ["/user", router]