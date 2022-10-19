const mongoose = require("mongoose");

const SubsSchema = new mongoose.Schema(
  {
    movieID: String,
    memberID: String,
    date: String,
  },
);

const Subs = mongoose.model('Subscriptions', SubsSchema);

module.exports = Subs;
