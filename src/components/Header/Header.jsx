import React from "react";
import { useState } from "react";
import "./Header.scss";
import SignIn from "../SignIn/SignIn";
import App from "../../App";
import SignUp from "../SignUp/SignUp.jsx";

export default function Header({ setOpenModal, setOpenReg }) {
  const toggleIn = () => {
    setOpenModal(true);
    setOpenReg(false);
  };
  const toggleUp = () => {
    setOpenReg(true);
    setOpenModal(false);
  };
  return (
    <div className="header">
      <h2 className="header__logo">SWAP</h2>
      <ul className="header__center">
        {" "}
        <li>Главная</li>
        <li>Программы</li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
      <div className="header__sign sign">
        <button onClick={toggleIn} className="sign__in">
          Вход
        </button>
        <div />
        <button onClick={toggleUp} className="sign__up">
          Регистрация
        </button>
      </div>
    </div>
  );
}
