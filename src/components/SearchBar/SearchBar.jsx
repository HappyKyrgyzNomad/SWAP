import "../SearchBar/SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="parent-bar">
      <form>
        <input type="text" placeholder="Найти программу..." />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
