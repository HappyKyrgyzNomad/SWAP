import "./Card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function Card({ title, description, images, like }) {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const [liked, setLike] = useState(false);
  const likedd = () => setLike(console.log("clicked"));

  return (
    <div className="mainCard" data-aos="zoom-in">
      <div className="mainCard__topContainer">
        <img
          src={images}
          width="402px"
          height="253px"
          alt=""
          className="mainCard__image"
        />
        <div className="mainCard__bottomContainer">
          {" "}
          <h1 className="mainCard__title">{title}</h1>
          <p className="child__description">{description}</p>
          <img
            onClick={likedd}
            className="mainCard__like"
            width="30px"
            src={like}
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Card;
