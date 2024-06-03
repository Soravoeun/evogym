import "./Card.css";

function Card(props) {
  const { img, title, description, button } = props;

  return (
    <div className="card">
      <img src={img} className="imgLogo"></img>
      <h8>{title}</h8>
      <p className="descriptionCard">{description}</p>
      {button}
    </div>
  );
}

export default Card;
