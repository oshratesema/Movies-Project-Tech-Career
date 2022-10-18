const Movies = require('../models/moviesModel');

const getMovies = async () => {
    return Movies.find({});
}

const getById = async (id) => {
    return Movies.findById(id);
};

// const updateMovie = async (id, obj) => {
//   try {
//     await Movies.findByIdAndUpdate(id, obj);
//     return 'Updated';
//   } catch (error) {
//     throw `Error: ${error}`;
//   }
// };



module.exports = {getMovies ,getById};