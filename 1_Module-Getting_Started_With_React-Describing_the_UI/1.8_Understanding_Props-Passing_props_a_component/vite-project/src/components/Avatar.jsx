const Avatar = ({ person, size = 0 }) => {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.imageId}</p>
      <div>{size}</div>
    </div>
  );
};

export default Avatar;
