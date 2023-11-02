const Loading = () => {
  return (
    <div className="Loading">
      <img src={`${process.env.PUBLIC_URL}/img/movie-roll-gif.gif`} alt="Loading..." width="300" />
      {/* <h1>Loading...</h1> */}
      <div>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loading;
