const users = require("../utils/users.js")

module.exports = (req, res) => {
    const {email , password} = req.query

    let access = false

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            access = true
        }

        return res.json({access})
    })
}