import "./MainPage.scss";
import "../../../App.scss";
import Slider from "../../Slider/Slider";

import Programs from "../../Programs/Programs";
import Subscribe from "../../Subscribe/Subscribe";

export default function MainPage(programsData, setProgramsData) {
  return (
    <div className="main">
      {" "}
      <Slider />
      <div className="app__container">
        <Programs
          programsData={programsData}
          setProgramsData={setProgramsData}
        />
      </div>
      <Subscribe />
    </div>
  );
}
