const Movies = require("../models/moviesModel");

const getMovies = async () => {
  try {
    return await Movies.find({});
  } catch (e) {
    throw { msg: e };
  }
};

const getById = async (id) => {
  try {
    return await Movies.findById(id);
  } catch (e) {
    throw { msg: e };
  }
};

const updateMovie = async (id, obj) => {
  try {
    await Movies.findByIdAndUpdate(id, obj);
    return 'Updated';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const deleteMovie = async (id) => {
  try {
    await Movies.findByIdAndDelete(id);
    return 'Deleted';
  } catch (error) {
    throw `Error: ${error}`;
  }
};

const addMovie = async (obj) => {
  const movies = new Movies({
    name: obj.name,
    year_Premiered: obj.year_Premiered,
    genres: obj.genres,
    image: obj.image 
  })

  await movies.save()
  return 'created'

}

module.exports = { getMovies, getById, updateMovie, deleteMovie, addMovie };
