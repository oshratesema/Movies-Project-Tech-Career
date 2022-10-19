const express = require('express');
const router = express.Router();

const moviesBLL = require('../BLL/moviesBLL.js');

router.get('/', async (req,res) => {
    try {
        const movies = await moviesBLL.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json(error)
    }
   
})

router.get('/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const movie = await moviesBLL.getById(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error)
    }
})
    

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const status = await moviesBLL.updateMovie(id, obj);
      res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const status = await moviesBLL.deleteMovie(id);
      res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  
  
module.exports = router;