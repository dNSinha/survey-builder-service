var express = require('express');

var detailedProfileRoute = function (detailedProfile) {
    var router = express.Router();//calling router

    router.route('/')
        .post(function (req, res) {
            var detailedProfileData = new detailedProfile(req.body);
            detailedProfileData.save();
            console.log(detailedProfileData);
            res.status(201).send(detailedProfileData);
        })

        .get(function (req, res) { ///This block can be used for getting email and password from DB

            var query = {};
            if (req.query.email) {
                query.email = req.query.email;
            }

            detailedProfile.find(query, function (err, detailedProfileData) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(detailedProfileData);
                }
            });
        });
    return router;
};

module.exports = detailedProfileRoute;
