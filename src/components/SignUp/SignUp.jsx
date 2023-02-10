import { useState } from "react";

import "./SignUp.scss";
import contact from "../../Icon/Login/Portal.svg";

import passwordVisibility from "../../images/Icon/filled/action/visibility-off.png";
import eyeIcon from "../../images/eye.png";

export default function SignUp({ openReg, setOpenReg }) {
  const toggleReg = () => setOpenReg(() => false);
  const [click, setClick] = useState(false);
  const clicked = () => setClick(!click);
  console.log(click);
  return (
    <div id="container">
      <div className="modal">
        <img src={contact} alt="icon" />
        <button onClick={toggleReg} className="modal__close">
          X
        </button>

        <h1 className="registration">Регистрация</h1>

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
              <img src={eyeIcon} onClick={clicked} />
            ) : (
              <img src={passwordVisibility} onClick={clicked} />
            )}
          </span>
        </div>

        <button className="modal__in">Регистрация</button>
        {/* <label className="remember">
          <input type="checkbox" /> Запомнить меня
        </label> */}
      </div>
    </div>
  );
}
