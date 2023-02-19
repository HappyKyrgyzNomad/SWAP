import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import SignIn from "./components/SignIn/SignIn.jsx";
import Programs from "./components/Programs/Programs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import MainPage from "./components/Pages/MainPage/MainPage.jsx";
import Slider from "./components/Slider/Slider";
import AboutPage from "./components/Pages/AboutPage/AboutPage.jsx";
import ProgramsPage from "./components/Pages/ProgramsPage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openReg, setOpenReg] = useState(false);
  const [programsData, setProgramsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/programs")
      .then((response) => response.json())
      .then((data) => setProgramsData(data));
  }, []);
  console.log(programsData);
  return (
    <div className="app">
      <Header
        openReg={openReg}
        setOpenReg={setOpenReg}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />{" "}
      {openModal && <SignIn setOpenModal={setOpenModal} />}
      {openReg && <SignUp setOpenReg={setOpenReg} />}
      <div className="app__routes">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                programsData={programsData}
                setProgramsData={setProgramsData}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/allprograms" element={<ProgramsPage />} />
        </Routes>
      </div>
      <div className="app__container">
        <Footer />
      </div>{" "}
    </div>
  );
}
export default App;
