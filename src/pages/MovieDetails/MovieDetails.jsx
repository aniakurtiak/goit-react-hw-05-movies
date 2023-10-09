import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  AboutWrap,
  AdditionalList,
  AdditionalWrap,
  Btn,
  GenresList,
  MovieWrapp,
} from './MovieDetails.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const [searchQuery] = useState(
    location?.state?.movieQuery
      ? `/movies?query=${location.state.movieQuery}`
      : null
  );

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
      <Link to={searchQuery || location?.state?.from || '/'}>
        <Btn>
          <HiOutlineArrowNarrowLeft />
          Go back
        </Btn>
      </Link>
      {movie && (
        <div>
          <div>
            <MovieWrapp>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt="Poster"
              />
              <AboutWrap>
                <h1> {movie.title}</h1>
                <p>User score: {movie.vote_average}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <GenresList>
                  {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </GenresList>
              </AboutWrap>
            </MovieWrapp>
            <AdditionalWrap>
              <p>Additional information</p>
              <AdditionalList>
                <NavLink to={`/movies/${movie.id}/cast`}>
                  <li>Cast</li>
                </NavLink>
                <NavLink to={`/movies/${movie.id}/reviews`}>
                  <li>Reviews</li>
                </NavLink>
              </AdditionalList>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </AdditionalWrap>
          </div>
        </div>
      )}
    </div>
  );
}
