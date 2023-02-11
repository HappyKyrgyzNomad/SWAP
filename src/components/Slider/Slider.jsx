import "./Slider.scss";
import img from "../../images/sliderPhoto.jpg";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Slider({ openModal }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/slider")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  console.log(photos);

  function randomId(max) {
    return Math.floor(Math.random() * max);
  }

  // console.log(randomId(3));
  return (
    <div className="slider">
      <div>
        <img
          src={photos[randomId(3)] && photos[randomId(3)].images}
          className="img"
        ></img>
      </div>
      <h1 className="slider__title">
        SWAP-единая платформа по поиску программ по обмену студентов
      </h1>
    </div>
  );
}
