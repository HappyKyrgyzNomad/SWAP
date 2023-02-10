import "../SearchBar/SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="parent-bar">
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
      </form>

      {/* //   <label>Country </label>
    //   <input />
    //   <label>Duration</label>
    //   <input />
    //   <label>Type</label>
    //   <input /> <label>Deadline</label>
    //   <input />
    //   <button className=" button clean">Clean</button>
    //   <button className="button search">Search</button> */}
    </div>
  );
}
