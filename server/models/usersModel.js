const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {  
      fullName: String,
      username: String,
      password: String,
    },
    {versionKey: false}
);

const User  = mongoose.model('users', UserSchema)

module.exports = User;
