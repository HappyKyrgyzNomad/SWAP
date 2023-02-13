import "./MainPage.scss";
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import Programs from "../../components/Programs/Programs";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useState } from "react";

export default function MainPage() {
  return (
    <div>
      {" "}
      <Slider />
      <div className="app__container">
        <SearchBar />
        <Programs />
        <Subscribe />
      </div>
    </div>
  );
}
