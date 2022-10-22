const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  city: String,
});

const Member = mongoose.model('members', memberSchema);

module.exports = Member;
