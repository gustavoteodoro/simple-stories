var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  userName: String,
  userEmail: String,
  userPassword: String,
});

var UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
