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

router.get('/:id', async (req, res) => {
      const { id } = req.params;
      const movie = await moviesBLL.getMovies(id);
      res.json(movie);
})
  

// router.put("/",async(req,res)=>{
//     try{
//         const obj = req.body;
//         const editMovie = await editMovie(obj)
//         res.status(200).json(obj)
//     }catch(e){

//     }
// })
module.exports = router;