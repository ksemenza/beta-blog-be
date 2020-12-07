/****************   NOT CONNECTED JUST TEMPLATE */
const express = require('express');
const restricted = require('../auth-cookies/restricted-middleware.js');

const router = express.Router({
    mergeParams: true
});

router.use(restricted);

router.get('/message', (req, res) => {
    res.status(200).json({message: 'You made it into the restricted section'});
});

module.exports = router;