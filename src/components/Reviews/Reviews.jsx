import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const movieReviews = await fetchMovieReviews(params.movieId);
        console.log(movieReviews);
        setReviews(movieReviews);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [params.movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};
