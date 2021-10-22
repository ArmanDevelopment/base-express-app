const express = require('express')

function group (cb, router = express.Router()){
    cb(router)

    return router
}

module.exports = {group}