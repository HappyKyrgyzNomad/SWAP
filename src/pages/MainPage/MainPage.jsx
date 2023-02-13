import "./MainPage.scss";
import "../.././App.scss";
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import Programs from "../../components/Programs/Programs";
import Subscribe from "../../components/Subscribe/Subscribe";

export default function MainPage() {
  return (
    <div className="main">
      {" "}
      <Slider />
      <div className="app__container">
        <SearchBar />
        <Programs />
      </div>
      <Subscribe />
    </div>
  );
}
