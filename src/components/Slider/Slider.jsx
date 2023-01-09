import "./Slider.scss";
import img from "../../images/sliderPhoto.jpg";

export default function Slider({ openModal }) {
  return (
    <div className="slider">
      <div>
        <img className="img" src={img} alt="img" />
      </div>
      <h1 className="slider__title">
        SWAP-единая платформа по поиску программ по обмену для студентов
      </h1>
    </div>
  );
}
