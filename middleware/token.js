require('dotenv').config()
var jwt = require("jsonwebtoken")

function checkToken(req, res, next){
    console.log(req)
}

module.exports = checkToken