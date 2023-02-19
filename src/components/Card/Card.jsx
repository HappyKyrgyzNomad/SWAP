import "./Card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import heart from "../../images/heart.png";
import heartRed from "../../images/favorite.png";

function Card({ title, description, images, link }) {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const [like, setLike] = useState(false);
  const liked = () => setLike(!like);

  return (
    <div className="mainCard" data-aos="zoom-in">
      <div className="mainCard__topContainer">
        <img
          src={images}
          width="402px"
          height="253px"
          alt="something"
          className="mainCard__image"
        />

        <div className="mainCard__bottomContainer">
          <a href={link} className="mainCard__title">
            {title}
          </a>
          <p className="child__description">{description}</p>
          <span>
            {" "}
            {like ? (
              <img
                src={heartRed}
                onClick={liked}
                className="mainCard__like"
                width="30px"
                alt="someimg"
              />
            ) : (
              <img
                src={heart}
                onClick={liked}
                className="mainCard__like"
                width="30px"
                alt="someimg"
              ></img>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Card;
