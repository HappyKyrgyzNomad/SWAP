import React from "react";
import "./Header.scss";
export default function Header({
  openModal,
  setOpenModal,
  openReg,
  setOpenReg,
}) {
  const toggleIn = () => setOpenModal(true);
  const toggleUp = () => setOpenReg(true);

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
