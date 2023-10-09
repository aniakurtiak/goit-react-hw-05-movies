import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { CastList, CastWrap } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const params = useParams();

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
    <CastWrap>
      {castInfo && (
        <CastList>
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
        </CastList>
      )}
    </CastWrap>
  );
};

export default Cast;
