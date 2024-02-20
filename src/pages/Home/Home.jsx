import React, { useEffect, useState } from 'react';
import EditorList from 'pages/EditorList/EditorList';
import { fetchTrending } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1 class="pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Trending today
      </h1>
      <EditorList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
