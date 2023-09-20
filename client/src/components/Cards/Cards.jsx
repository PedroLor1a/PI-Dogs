import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  const maximo = dogs.length / porPagina;

  return (
    <div className={style.fondo}>
      <div className={style.container}>
        {dogs
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((d) => (
            <div className={style.containerCard1} key={d.id}>
              <div className={style.container1} key={d.id}>
                <Card
                  key={d.id}
                  id={d.id}
                  name={d.name}
                  image={d.image}
                  temperaments={d.temperament}
                  weigth={d.weigth}
                />
              </div>
            </div>
          ))}
      </div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default Cards;
