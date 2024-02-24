import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';
import noImage from '../../images/noImage.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActorsOfMovie = async () => {
      try {
        setLoading(true);
        const actorsData = await fetchActors(movieId);
        setActors(actorsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <h2 className="text-2xl pb-4 font-bold pt-4">Movie Cast</h2>
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              height="300px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${noImage}`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
