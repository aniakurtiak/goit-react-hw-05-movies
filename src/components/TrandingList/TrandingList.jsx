import { Link } from 'react-router-dom';

export const TrandingList = ({ tranding }) => {
  return (
    <ul>
      {tranding.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};
