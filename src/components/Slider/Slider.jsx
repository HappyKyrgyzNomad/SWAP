import "./Slider.scss";
// import { useState } from "react";
// import { useEffect } from "react";

export default function Slider({ openModal }) {
  const slider=[
    {
      "title": "Aishirin1",
      "id": 1,
      "images": "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
    },
    {
      "title": "Aishirin11",
      "id": 2,
      "images": "https://www.thebalancemoney.com/thmb/Ci8l5i-cl3_emjyarN7RVunlULo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/enjoying-his-studies-484286872-735782e8d2144f7496bf9b947bcc1a56.jpg"
    },
    {
      "title": "Aishirin22",
      "id": 3,
      "images": "https://www.cdc.gov/healthyyouth/whatworks/images/GettyImages-492699342.jpg?_=83260"
    }
  ]
  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/slider")
  //     .then((res) => res.json())
  //     .then((data) => setPhotos(data));
  // }, []);

  function randomId(max) {
    return Math.floor(Math.random() * max);
  }

  // console.log(randomId(3));
  return (
    <div className="slider">
      <div>
        <img alt="some"
          src={slider[randomId(3)] && slider[randomId(3)].images}
          className="img"
        ></img>
      </div>
      <h1 className="slider__title">
        SWAP-единая платформа по поиску программ по обмену студентов
      </h1>
    </div>
  );
}
