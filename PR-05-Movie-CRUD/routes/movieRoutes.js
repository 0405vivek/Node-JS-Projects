const express = require('express');
const router = express.Router();
const { getMovies, createMovie, editMovieForm, updateMovie, deleteMovie,  movieDetails,  } = require('../controller/movieController');
const upload = require('../middleware/multerImage');

router.get('/', getMovies); 

router.get('/add', (req, res) => {
    res.render('addMovie');
  });
router.post('/add', upload.single('poster'), createMovie);
router.get('/edit/:id' ,editMovieForm);
router.post('/edit/:id', upload.single('poster'), updateMovie);
router.post('/delete/:id', deleteMovie);
router.get('/movies/:id', movieDetails );


module.exports = router;
