const moviesWS = require("../DAL/moviesWS");

const getMovies = async () => {
  let { data: movies } = await moviesWS.getMovies();
  movies = movies.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      yearPremiered: movie.premiered,
      genres: movie.genres,
      image: movie.image.medium,
    };
  });
  return movies;
};

module.exports = {getMovies}