import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import './db';
import './seedData';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';
import upcomingMoviesRouter from './api/upcomingMovies';
import { loadUpcomingMovies } from './seedData';


dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

// replace app.use(session([... with the following:
app.use(passport.initialize());

const port = process.env.PORT;

app.use(express.json());

app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
// eslint-disable-next-line no-irregular-whitespace
// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcomingMovies', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
//api with id needed here?
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});