import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const movieCast = await fetchMovieCast(params.movieId);
        setCastInfo(movieCast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [params.movieId]);

  return (
    <div>
      {castInfo && (
        <ul>
          {castInfo.cast?.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt="profile_photo"
              />
              <p>{actor.name}</p>
              <p>character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
