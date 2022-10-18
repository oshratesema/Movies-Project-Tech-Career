const mongoose = require("mongoose");

const SubsSchema = new mongoose.Schema(
  {
    movieID: String,
    memberID: String,
    date: String,
  },
  { versionKey: false }
);

const Subs = mongoose.model('subs', SubsSchema);

module.exports = Subs;
