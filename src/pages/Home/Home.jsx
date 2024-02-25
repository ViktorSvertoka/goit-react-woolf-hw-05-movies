import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrending } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1 className="pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Trending today
      </h1>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
