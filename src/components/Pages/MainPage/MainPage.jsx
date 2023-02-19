import "./MainPage.scss";
import "../../../App.scss";
import Slider from "../../Slider/Slider";
import SearchBar from "../../SearchBar/SearchBar";
import Programs from "../../Programs/Programs";
import Subscribe from "../../Subscribe/Subscribe";

export default function MainPage(programsData, setProgramsData) {
  return (
    <div className="main">
      {" "}
      <Slider />
      <div className="app__container">
        <SearchBar />
        <Programs
          programsData={programsData}
          setProgramsData={setProgramsData}
        />
      </div>
      <Subscribe />
    </div>
  );
}
