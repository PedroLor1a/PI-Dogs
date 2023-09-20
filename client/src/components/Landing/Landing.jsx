import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Bienvenido a mi PI de Dogs</h1>
      <Link to="/home">
        <button className={style.btn}>Go Home</button>
      </Link>
    </div>
  );
};

export default Landing;
