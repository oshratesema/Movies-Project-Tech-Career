const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  year_Premiered: String,
  genres: [String],
  image: String,
}
);

const Movie = mongoose.model("allMovies", movieSchema);

module.exports = Movie;
