import axios from "axios";
import { Link } from "react-router-dom";

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

  // const tempsInfo = async (idTemp) => {
  //   let arraycito = [];
  //   const response = await axios("http://localhost:3001/temperaments");
  //   const data = response.data;
  //   const mapeo = data.find((t) => {
  //     if (idTemp === t.id) {
  //       return t.id;
  //     }
  //   });
  //   return arraycito.push(mapeo.name);
  // };
  // console.log(tempsInfo(33));

  // const response = axios("http://localhost:3001/temperaments");
  // const data = response.data;
  // const findTemp = data.find((t) => {
  //   if (idTemp === t.id) {
  //     return t.id;
  //   }
  // });
  return (
    <div>
      <h3>{name}</h3>
      {weightMax ? (
        <div>
          <h3>{weightMax + " - " + weightMin + " KG"}</h3>
          <h3>{heightMax + " - " + heightMin + " CM"}</h3>
        </div>
      ) : null}

      <h3>{temperaments}</h3>
      <h3>{weigth}</h3>

      <Link to={`/detail/${id}`}>
        <img src={image} alt={name}></img>
      </Link>
    </div>
  );
};

export default Card;
