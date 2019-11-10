var express = require('express');

var detailedProfileRoute = function (questionsEntry) {
    var router = express.Router();//calling router

    router.route('/')
        .post(function (req, res) {
            var questionsEntryData = new questionsEntry(req.body);
            questionsEntryData.save();
            console.log(questionsEntryData);
            res.status(201).send(questionsEntryData);
        })

        .get(function (req, res) { ///This block can be used for getting email and password from DB

            var query = {};
            if (req.query.email) {
                query.email = req.query.email;
            }

            questionsEntry.find(query, function (err, questionsEntryData) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(questionsEntryData);
                }
            });
        });
    return router;
};

module.exports = questionsEntryRoute;
