const router = require('express').Router(),
    signUP = require('../model/signUp/index'),//calling the model
    signUPRouter = require('./signUp/index')(signUP),
    detailedProfile = require('../model/detailedProfile/index'),
    detailedProfileRouter = require('./detailedProfile/index')(detailedProfile);

router.use('/signup', signUPRouter);
router.use('/detailedProfile', detailedProfileRouter);

module.exports = router;