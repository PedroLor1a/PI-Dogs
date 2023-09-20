import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";

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
      <div className={style.container}>
        <Link to={"/home"}>
          <button className={style.btn}>Home</button>
        </Link>
        <div>
          {dog ? (
            <div key={dog.id} className={style.containerCard1}>
              <div className={style.container1}>
                <h4>Id: {dog.id}</h4>
                <h4>Nombre: {dog.name}</h4>
                <h4>Height: {dog.height}</h4>
                <h4>Weigth: {dog?.weigth} </h4>
                <h4>Temperamento: {dog.temperament?.join(", ")}</h4>
                <h4>Años de vida: {dog.yearsLife}</h4>
                <h4>Criado para: {dog.bredFor}</h4>
                <img src={dog.image} alt={dog.id} className={style.img} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
