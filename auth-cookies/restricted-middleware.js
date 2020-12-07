/****************   NOT CONNECTED JUST TEMPLATE */

const User = require('../user/user-model')
const bcrypt = require('bcryptjs')

module.exports = function restricted(req, res, next) {
    if(req.session && req.session.id) {
        next();
    } else if(!req.session) {
        console.log(`no session found`);
        res.status(401).json({message: `no session found`})
    } else {
        console.log(`session invalid`);
        res.status(401).json({message:`session is invalid`})
    }
}