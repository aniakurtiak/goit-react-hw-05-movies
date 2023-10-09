import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList, movieQuery }) => {
  const loacation = useLocation();

  return (
    <ul>
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
    </ul>
  );
};
