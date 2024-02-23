import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/MovieList/MovieList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/tmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = async queryMovie => {
    try {
      setLoading(true);
      const searchResults = await fetchSearchByKeyword(queryMovie);
      setSearchFilms(searchResults);
      setNoMoviesText(searchResults.length === 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There are no movies with this request. Please, try again</p>
      )}
      {searchFilms.length > 0 && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
