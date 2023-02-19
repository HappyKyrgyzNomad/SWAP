import Programs from "../Programs/Programs";
import SearchBar from "../SearchBar/SearchBar";
import "./ProgramsPage.scss";

export default function ProgramsPage() {
  return (
    <div className="parent">
      <SearchBar className="parent__bar" />
      <div className="parent__programs">
        <Programs />
      </div>
    </div>
  );
}
