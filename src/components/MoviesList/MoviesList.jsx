import { Link, useLocation } from 'react-router-dom';
import { MovieList } from './MovieList.styled';

export const MoviesList = ({ moviesList, movieQuery }) => {
  const loacation = useLocation();

  return (
    <MovieList>
      {moviesList.map(movieItem => {
        return (
          <li key={movieItem.id}>
            <Link
              to={`/movies/${movieItem.id}`}
              state={{ from: loacation, movieQuery }}
            >
              {movieItem.title}
            </Link>
          </li>
        );
      })}
    </MovieList>
  );
};
