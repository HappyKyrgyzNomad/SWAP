import "./Subscribe.scss";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <h1>Подпишитесь на нашу рассылку </h1>
      <p>
        Подпишитесь на нашу рассылку и получайте наши обновления первыми, а
        также становитесь частью нашего сообщества преданных своему делу
        учеников.
      </p>
      <form>
        <input type="text" placeholder="Введите email почту" />
        <button type="submit">Подписаться</button>
      </form>
    </div>
  );
}
