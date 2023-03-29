var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {type: String },
    lastName : {type: String },
    emailId : {type: String },
    phoneNo : {type: String },
});



module.exports = mongoose.model('User', UserSchema);