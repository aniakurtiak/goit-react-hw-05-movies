import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';
import { Input, SearchButton, SearchForm } from './Movies.styled';
import toast from 'react-hot-toast';

const Movies = () => {
  const [querySearch, setQuerySearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  const handleChange = evt => {
    setQuerySearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (querySearch === '') {
      toast.error('Gotta write something!');
    }
    setSearchParams({ query: querySearch });
  };

  useEffect(() => {
    const controller = new AbortController();
    if (movieQuery === '') return;
    async function getMovies() {
      try {
        const searchMovies = await fetchSearchMovie(
          movieQuery,
          controller.signal
        );
        if (searchMovies.results && searchMovies.results.length === 0) {
          toast.error('No movies were found for your request!');
          return;
        }
        setMovies(searchMovies.results);
      } catch (error) {
        toast.error('Ooops! Something went wrong!');
      }
    }
    getMovies();

    return () => controller.abort();
  }, [movieQuery]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          value={querySearch}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {movies.length > 0 && (
        <div>
          <MoviesList moviesList={movies} movieQuery={movieQuery} />
        </div>
      )}
    </div>
  );
};

export default Movies;
