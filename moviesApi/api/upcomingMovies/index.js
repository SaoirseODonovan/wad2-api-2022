// //to be populated 
// //must create model first

// import express from 'express';
// import upcomingMoviesModel from './upcomingMoviesModel';

// const router = express.Router(); 
// router.get('/', async (req, res, next) => {
//     upcomingMoviesModel.find().then(upcomingMovies => res.status(200).send(upcomingMovies)).catch(next);
// });

// router.get('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     upcomingMoviesModel.findByMovieDBId(id).then(upcomingMovies => res.status(200).send(upcomingMovies)).catch(next); 
// });

// export default router;