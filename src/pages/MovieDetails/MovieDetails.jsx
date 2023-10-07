import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetails(params.movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [params.movieId]);

  return (
    <div>
      {movie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="Poster"
            />
            <h1> {movie.title}</h1>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <div>
              <p>Additional information</p>
              <ul>
                <NavLink to={`/movies/${movie.id}/cast`}>
                  <li>Cast</li>
                </NavLink>
                <NavLink to={`/movies/${movie.id}/reviews`}>
                  <li>Reviews</li>
                </NavLink>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
