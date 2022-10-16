const express = require('express');
const router = express.Router();

const moviesBLL = require('../BLL/moviesBLL');

router.get('/', async (req,res) => {
    try {
        const movies = await moviesBLL.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json(error)
    }
   
})

module.exports = router;