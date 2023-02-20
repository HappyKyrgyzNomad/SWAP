import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

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
      <Link to="/" className="header__logo">
        SWAP
      </Link>
      <ul className="header__center">
        {" "}
        <Link className="header__link" to="/">
          Главная
        </Link>
        <Link className="header__link" to="/allprograms">
          Программы
        </Link>
        <Link className="header__link" to="/about">
          О нас{" "}
        </Link>
        <Link className="header__link" to="/contact">Контакты</Link>
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
