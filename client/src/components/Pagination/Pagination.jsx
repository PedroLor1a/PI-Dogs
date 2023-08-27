import { useState } from "react";
import style from "../Pagination/Pagination.module.css";

const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <div className={style.container}>
      <button
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
        className={style.btn}>
        🡸
      </button>
      <p className={style.p}>{input} </p>
      <p className={style.p}> de {maximo}</p>
      <button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
        className={style.btn}>
        🡺
      </button>
    </div>
  );
};

export default Pagination;
