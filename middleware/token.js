require('dotenv').config()
var jwt = require("jsonwebtoken")

function checkToken(req, res, next){
    console.log(req.headers['authorization'])
}

module.exports = checkToken