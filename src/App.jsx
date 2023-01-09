import { useState } from "react";
import { useActionData } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Slider from "./components/Slider/Slider";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <Slider openModal={openModal} />
      {openModal && <SignIn setOpenModal={setOpenModal} />}
    </div>
  );
}
export default App;
