import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

import styles from './Home.module.css';
import Header from '../components/Header';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);
  return (
    <div className={styles.Home}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={styles.movie__list}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genres={movie.genres}
                coverImg={movie.medium_cover_image}
                summary={movie.summary}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
