
const axios = require('axios');

const url = 'https://api.tvmaze.com/shows';

const getMovies = () => {
    return axios.get( url);
}

module.exports = {getMovies};