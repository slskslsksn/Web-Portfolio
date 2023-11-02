const Image = ({ src, width, title }) => {
  return (
    <img
      src={src}
      onError={(event) => {
        event.target.src = `${process.env.PUBLIC_URL}/img/img-preparing.jpg`;
      }}
      alt={title}
      width={width}
    />
  );
};

export default Image;
