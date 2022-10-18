const Movies = require('../models/moviesModel');

const getMovies = async () => {
    return Movies.find({});
}

module.exports = {getMovies};