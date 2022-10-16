const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {  
        name: String,
        yearPremiered: String,
        genres: [String],
        image: String
    },
    {versionKey: false}
);

const Movie  = mongoose.model('movieLibrary', movieSchema)

module.exports = Movie;