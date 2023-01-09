import React from "react";
import { useState } from "react";
import "./Header.scss";
import SignIn from "../SignIn/SignIn";
import App from "../../App";

export default function Header({ openModal, setOpenModal }) {
  const toggle = () => setOpenModal((openModal) => !openModal);

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
        <button onClick={toggle} className="sign__in">
          Вход
        </button>

        <button className="sign__up">Регистрация</button>
      </div>
    </div>
  );
}
