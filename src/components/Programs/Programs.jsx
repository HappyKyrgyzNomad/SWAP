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
  const [searh, setSearch] = useState("");
  console.log(searh);

  return (
    <div className="programs">
      <div className="programs__bar">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            placeholder="Найти программу..."
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="programs__sort">
        {" "}
        <h1 className="programs__pop">Популярные программы</h1>
        <h1 className="programs__all">Все программы</h1>
      </div>

      <div className="programs__card">
        {programsData
          .filter((data) => {
            return searh.toLowerCase() === ""
              ? data
              : data.title.toLowerCase().includes(searh);
          })
          .map((data) => (
            <Card
              key={data.id}
              title={data.title}
              images={data.images}
              like={data.like}
              link={data.link}
            />
          ))}
      </div>
    </div>
  );
}
