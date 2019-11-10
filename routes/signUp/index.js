var express = require('express');

var regRoute = function(signUP){
    var router = express.Router();//calling router

    router.route('/')
    .post(function (req, res) {
        var signupData = new signUP(req.body);
        signupData.save();
        console.log(signupData);
        res.status(201).send(signupData);
    })

    .get(function (req, res) { ///This block can be used for getting email and password from DB

        var query = {};
        if (req.query.email) {
            query.email = req.query.email;
        }

        signUP.find(query, function (err, signupData) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.json(signupData);
            }
        });
    });
return router;
// registerRouter.route('/signup/:email')///Can only be used for ObjectID
//     .get(function (req, res) { ///This block can be used for getting email for single item and password from DB
//         var signupData = new signUP(req.body);
//         var paramsData = req.params.email;
//         // if (req.query.email) {/// this is used to validate the email search
//         //     query.email = req.query.email;
//         // }

//         signUP.findById(req.params.email, function (err, signupDatas) {
//             if (err) {
//                 res.status(500).send(err);
//             }
//             else {
//                 res.json(signupDatas);
//             }
//         });
//     });
};

module.exports = regRoute;
