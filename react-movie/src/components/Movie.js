import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image';
const Movie = ({id, coverImg, title, summary, genres }) => {
  const onError = (e) => {
    console.log(e);
    e.target.src = `${process.env.PUBLIC_URL}/img/img-preparing.jpg`;
    e.target.width = '400';
  }
  return (
    <div>
      <Image src={coverImg} title={title} width={300}/>
      {/* <img src={coverImg} alt={title} onError={onError}/> */}
      <h1> <Link to={`/detail/${id}`}>{title}</Link></h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
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
