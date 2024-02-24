import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <div>
          <h2 className="text-2xl pb-4 font-bold pt-4">Movie Reviews</h2>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
