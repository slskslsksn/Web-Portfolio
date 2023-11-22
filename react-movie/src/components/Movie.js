import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image';
import styles from './Movie.module.css';
const Movie = ({ id, coverImg, title, summary, genres }) => {
  const onError = (e) => {
    console.log(e);
    e.target.src = `${process.env.PUBLIC_URL}/img/img-preparing.jpg`;
    e.target.width = '400';
  };
  return (
    <div className={styles.Movie} id={id}>
      <Image src={coverImg} title={title} width={300} />
      <div className={styles.test}>
        <h1>
          <Link to={`/detail/${id}`}>{title}</Link>
        </h1>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
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
