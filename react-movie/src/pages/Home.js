import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

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
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default Home;
