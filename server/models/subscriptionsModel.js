const mongoose = require("mongoose");

const subsSchema = new mongoose.Schema({
  movieID: String,
  memberID: String,
  date: String,
}
);  

const Subs = mongoose.model('subs', subsSchema);
module.exports = Subs;
