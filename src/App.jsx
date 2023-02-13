import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import SignIn from "./components/SignIn/SignIn.jsx";
import Programs from "./components/Programs/Programs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import MainPage from "./pages/MainPage/MainPage";
import Slider from "./components/Slider/Slider";
import AboutPage from "././pages/AboutPage/AboutPage.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openReg, setOpenReg] = useState(false);
  return (
    <div className="app">
      <Header
        openReg={openReg}
        setOpenReg={setOpenReg}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {openModal && <SignIn setOpenModal={setOpenModal} />}
      {openReg && <SignUp setOpenReg={setOpenReg} />}
      <Routes>
        <Route path="/" element={<MainPage />} />{" "}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <div className="app__container">
        <Footer />
      </div>{" "}
    </div>
  );
}
export default App;
