var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var questionsEntryModel = new Schema({
    formKey: {
        type: String
    },
    formData: {
        appstore: {
            formKey: {
                type: String
            },
            toEmailId: {
                type: String
            },
            forMetaData: {
                formName: {
                    type: String
                },
                formDescriptoin: {
                    type: String
                }
            },
            questionsArray: [
                {
                    questionType: {
                        type: String
                    },
                    question: {
                        type: String
                    },
                    isRequired: {
                        type: String
                    },
                }
            ],
            responseMode: {
                type: String
            }
        }
    }
});

module.exports = mongoose.model('questionsEntry', questionsEntryModel, 'questionsEntryCollection');