import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

import styles from './Home.module.css';
import Header from '../components/Header';

const Home = ({loading, movies}) => {
  
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
