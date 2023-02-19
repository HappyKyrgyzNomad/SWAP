import "./Footer.scss";
import instagram from "../../images/instagram-logo.png";
import facebook from "../../images/facebook.png";
import vk from "../../images/vk.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <div className="container_media">
        <h1>SWAP</h1>
        <img src={instagram} alt="something"></img>
        <img src={facebook} alt="something"></img>
        <img src={vk} alt="something"></img>
      </div>
      <div className="container__info">
        <div className="container__links">
          {" "}
          <h1>Быстрые ссылки</h1>
          <nav>
            {" "}
            <Link className="container__link" to="/">
              Главная
            </Link>
            <p></p>
            <Link className="container__link" to="/about">
              О нас
            </Link>
            <a href="https://www.instagram.com/talacoustics/">Наши сервисы</a>
          </nav>
        </div>
        <div className="programsFoot">
          <h1>Программы</h1>

          <a href="https://www.daad.de/en/">DAAD</a>
          <a href="https://techgirlsglobal.org/">Tech girls </a>
          <a href="https://www.discoverflex.org/">FLEX</a>
        </div>
        <div className="community">
          <h1>Сообщества </h1>
          <p>Студенты</p>
          <a href="https://www.instagram.com/aishirin_zh/">Инструкторы </a>
          <p>Бесплатыне ресурсы</p>
        </div>
      </div>

      <div className="container__rights">
        <h1>Все права защищены</h1>
        <p>© 2023 SWAP</p>
      </div>
    </div>
  );
}
