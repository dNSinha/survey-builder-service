var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var signupModel = new Schema({
    email: {
        type: String
    },
    ConfirmEmail: {
        type: String
    },
    PasswordData: {
        type: String
    },
    ConfirmPassword: {
        type: String
    }
});

module.exports = mongoose.model('signUP', signupModel, 'signupCollection');