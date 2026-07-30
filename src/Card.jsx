function Card({ name, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>View Product</button>
    </div>
  );
}

export default Card;