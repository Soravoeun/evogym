import { useState } from "react";
import "./CardImage.css";
import React from "react";

function CardImage(props) {
  const [show, setShow] = useState(false);

  const { imgCard, title, description } = props;
  return (
    <>
      <section
        className="cardImage"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img src={imgCard} className="imgCardImage"></img>

        <div className={show ? "cardText visible" : "cardText"}>
          <h9>{title}</h9>
          <p className="textHidden">{description}</p>
        </div>
      </section>
    </>
  );
}

export default CardImage;
