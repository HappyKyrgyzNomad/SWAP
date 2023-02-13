import { useState } from "react";

import "./SignIn.scss";
import contact from "../../Icon/Login/Portal.svg";

import passwordVisibility from "../../images/Icon/filled/action/visibility-off.png";
import eyeIcon from "../../images/eye.png";

export default function SignIn({ openModal, setOpenModal }) {
  const toggleLocal = () => setOpenModal(() => false);
  const [click, setClick] = useState(true);
  const clicked = () => setClick(!click);
  console.log(click);
  return (
    <div id="container">
      <div className="modal">
        <img src={contact} alt="icon" />
        <button onClick={toggleLocal} className="modal__close">
          X
        </button>

        <h1>Вход</h1>

        <div className="modal__fill">
          {" "}
          <input
            placeholder="Имя пользователя"
            type="text"
            id="username"
            name="username"
          ></input>
        </div>

        <div className="modal__fill">
          {" "}
          <input
            placeholder="Пароль"
            type={click ? "text" : "password"}
            id="pass"
            name="password"
            minLength="8"
            required="8"
          />
          <span className="logo-eye">
            {click ? (
              <img src={eyeIcon} onClick={clicked} alt="eyeicon" />
            ) : (
              <img
                src={passwordVisibility}
                onClick={clicked}
                alt="passvisiability"
              />
            )}
          </span>
        </div>

        <button className="modal__in">Войти</button>
        {/* <label className="remember">
          <input type="checkbox" /> Запомнить меня
        </label> */}
      </div>
    </div>
  );
}
