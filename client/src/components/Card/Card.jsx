import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  const {
    id,
    name,
    image,
    temperaments,
    weightMax,
    weigth,
    weightMin,
    heightMax,
    heightMin,
    idTemp,
  } = props;

  return (
    <div>
      <h3>Nombre: {name}</h3>
      {weightMax ? (
        <div>
          <h3>Height: {heightMax + " - " + heightMin + " CM"}</h3>
          <h3>Weigth: {weightMax + " - " + weightMin + " KG"}</h3>
        </div>
      ) : null}
      {temperaments ? <h3>Temperamento{temperaments + ""}</h3> : null}
      {weigth ? <h3>Weigth {weigth}</h3> : null}
      {idTemp ? <h3>Temperamento: {idTemp}</h3> : null}
      <Link to={`/detail/${id}`}>
        {image ? (
          <img className={style.img} src={image} alt={name}></img>
        ) : (
          <img
            className={style.img}
            src="https://i.pinimg.com/originals/dd/a1/ab/dda1abd6d656eaa69ad7cb7a9fa527f7.jpg"
            alt={name}></img>
        )}
      </Link>
    </div>
  );
};

export default Card;
