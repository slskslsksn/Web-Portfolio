import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Movie = ({id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1> <Link to={`/detail/${id}`}>{title}</Link></h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li id={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
