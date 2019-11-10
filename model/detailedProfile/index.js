var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var detailedProfileModel = new Schema({
    surveys: [
        {
            title: {
                type: String
            },
            completion: {
                type: String
            },
            averageTime: {
                type: String
            },
            surveysTaken: {
                type: String
            },
            profileData: [
                {
                    valueOne: {
                        type: String
                    },
                    valueTwo: {
                        type: String
                    },
                    sum: {
                        type: String
                    }
                }
            ]
        }
    ],
    overall: [
        {
            valueOne: {
                type: String
            },
            valueTwo: {
                type: String
            },
            sum: {
                type: String
            }
        }
    ],
    surveysAttempted: [
        {
            valueOne: {
                type: String
            },
            valueTwo: {
                type: String
            },
            sum: {
                type: String
            }
        }
    ],
    surveysCompleted: [
        {
            valueOne: {
                type: String
            },
            valueTwo: {
                type: String
            },
            sum: {
                type: String
            }
        }
    ],
    product: [
        {
            name: {
                type: String
            }
        }
    ],
    company: [
        {
            name: {
                type: String
            }
        }
    ],
    place: [
        {
            name: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('detailedProfile', detailedProfileModel, 'detailedProfilelCollection');