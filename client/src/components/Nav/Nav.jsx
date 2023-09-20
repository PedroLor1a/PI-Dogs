import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  const pathname = useLocation();

  return (
    <div className={style.container}>
      <div className={style.containerSearch}>
        {pathname !== "/detail/" && <SearchBar />}
      </div>
    </div>
  );
};

export default Nav;
