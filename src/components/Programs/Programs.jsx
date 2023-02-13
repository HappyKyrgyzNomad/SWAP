import { useEffect } from "react";
import { useState } from "react";
import "./Programs.scss";
import Card from "../Card/Card";

export default function Programs() {
  const [programsData, setProgramsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/programs")
      .then((response) => response.json())
      .then((data) => setProgramsData(data));
  }, []);
  console.log(programsData);

  return (
    <div className="programs">
      <div className="programs__sort">
        {" "}
        <h1 className="programs__pop">Популярные программы</h1>
        <h1 className="programs__all">Все программы</h1>
      </div>

      <div className="programs__card">
        {programsData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            images={data.images}
            like={data.like}
          />
        ))}
      </div>
    </div>
  );
}
