import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [dog, setDog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
      console.log(data);
      if (data[0].id) {
        setDog(data[0]);
      } else {
        window.alert("No hay dog con esa Id");
      }
    });
    return setDog({});
  }, [id]);

  return (
    <div>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <div>
        {dog ? (
          <div key={dog.id}>
            <img src={dog.image} alt={dog.id} />
            <h4>Id: {dog.id}</h4>
            <h4>Nombre: {dog.name}</h4>
            <h4>Height: {dog.height}</h4>
            <h4>Weigth: {dog?.weigth} </h4>
            <h4>Temperamento: {dog.temperament}</h4>
            <h4>Años de vida: {dog.yearsLife}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Detail;
