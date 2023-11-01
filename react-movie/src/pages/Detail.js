// https://yts.mx/api/v2/movie_details.json?movie_id=

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : 
  <div>
    <img src={detail.large_cover_image} alt="movie_cover" width="300px"/>
    <h1>{detail.title} ({detail.year})</h1>
    <p>{detail.description_full}</p>
  </div>
  }</div>;
};

export default Detail;
