import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  Button,
} from './MovieDetails.styled';
import placeholder from '../../images/placeholder.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        setLoading(true);
        const detailMovie = await fetchMovieDetails(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return null;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo;

  const companiesList = movieInfo.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginRight: 30,
                marginTop: 10,
              }}
            />
          )}
        </li>
      )
  );

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>

      <Container>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${placeholder}`
          }
          alt={original_title}
        />
        <div>
          <h1 className="text-2xl pb-4">
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p className="pb-4">User score: {popularity}</p>
          <h2 className="text-2xl pb-4">Overview</h2>
          <p className="pb-4">{overview}</p>
          <h2 className="text-2xl pb-4">Genres</h2>
          <List>
            {genres.map(genre => (
              <li className="pb-4" key={genre.id}>
                {genre.name}
              </li>
            ))}
          </List>

          {companiesList[0] !== null && companiesList.length > 0 && (
            <>
              <h2 className="text-2xl pb-4">Production companies</h2>
              <ul className="flex">{companiesList}</ul>
            </>
          )}
        </div>
      </Container>

      <hr />

      <div>
        <h3 className="text-2xl pb-4">Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
