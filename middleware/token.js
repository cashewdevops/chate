require('dotenv').config()

var jwt = require("jsonwebtoken")

module.exports = async function checkeToken(req, res, next) {

    const secret = process.env.SECRET

    const verifiayToken = req.headers.cookie
    const token = verifiayToken.split("=")[1].split(";")[0]

    if (!token) {
      res.redirect("/")
    } else {
        try {
            const response = jwt.verify(token, secret)
            if (response) {
                next()
            } else {
                res.redirect("/")
            }
        } catch (error) {
            res.redirect("/")
        }

    }



}