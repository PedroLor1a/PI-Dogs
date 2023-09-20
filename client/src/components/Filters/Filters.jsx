import { useDispatch, useSelector } from "react-redux";
import {
  filterName,
  filterWeight,
  getDogs,
  getTemps,
} from "../../redux/actions";
import Card from "../Card/Card";
import { useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemps());
  }, []);

  const filter = useSelector((state) => state.filterByTemps);
  const temps = useSelector((state) => state.temps);

  const handlerFilterName = (e) => {
    dispatch(filterName(e.target.value));
  };

  const handlerFilterWeigth = (e) => {
    dispatch(filterWeight(e.target.value));
  };

  return (
    <div className={style.container}>
      <select onChange={handlerFilterName} className={style.select}>
        <option value="all">BY NAME</option>
        <option value="asc">Ascending order</option>
        <option value="desc">Descending order</option>
      </select>
      <select onChange={handlerFilterWeigth} className={style.select}>
        <option value="all">BY WEIGTH</option>
        <option value="asc">Ascending order</option>
        <option value="desc">Descending order</option>
      </select>

      <div className={style.container}>
        {filter.map((e) => {
          return (
            <div className={style.container1}>
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
                temperaments={e.temperament}
                weigth={e.weigth}
                weightMax={e.weightMax}
                weightMin={e.weightMin}
                heightMax={e.heightMax}
                heightMin={e.heightMin}
                idTemp={e.idTemp}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
