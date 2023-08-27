import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const pathname = useLocation();

  return (
    <div>
      <Link to="/form">
        <button>Form</button>
      </Link>
      {pathname !== "/detail/" && <SearchBar />}
    </div>
  );
};

export default Nav;
