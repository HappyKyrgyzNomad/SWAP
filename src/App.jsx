import { key } from "localforage";
import { useEffect } from "react";
import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import SignIn from "./components/SignIn/SignIn.jsx";
import Slider from "./components/Slider/Slider";
import Programs from "./components/Programs/Programs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openReg, setOpenReg] = useState(false);

  return (
    <div className="app">
      <Header
        openModal={openModal}
        setOpenModal={setOpenModal}
        openReg={openReg}
        setOpenReg={setOpenReg}
      />
      <Slider />
      <div className="app__container">
        {openModal && <SignIn setOpenModal={setOpenModal} />}
        {openReg && <SignUp setOpenReg={setOpenReg} />}
        <SearchBar />
        <Programs />
      </div>
    </div>
  );
}
export default App;
