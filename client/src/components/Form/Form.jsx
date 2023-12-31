import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTemps } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [heightMax, setHeightMax] = useState("");
  const [heightMin, setHeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [yearsLifeMax, setYearsLifeMax] = useState("");
  const [yearsLifeMin, setYearsLifeMin] = useState("");
  const [image, setImage] = useState("");
  const [idTemp, setIdTemp] = useState("");

  const temps = useSelector((state) => state.temps);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === "" ||
      heightMax === "" ||
      heightMin === "" ||
      weightMax === "" ||
      weightMin === "" ||
      yearsLifeMax === "" ||
      yearsLifeMin === "" ||
      idTemp === ""
    ) {
      alert("No pueden existir campos vacios");
      return;
    }

    if (/\d/.test(name)) {
      alert("El nombre no puede contener numeros");
      return;
    }

    if (name.length > 30) {
      alert("el Nombre no puede contener mas de 30 caracteres");
      return;
    }

    if (image) {
      setImage(image);
    } else {
      setImage(
        "https://i.pinimg.com/originals/dd/a1/ab/dda1abd6d656eaa69ad7cb7a9fa527f7.jpg"
      );
    }

    try {
      const response = axios.post("http://localhost:3001/dogs", {
        name,
        heightMax,
        heightMin,
        weightMax,
        weightMin,
        yearsLifeMax,
        yearsLifeMin,
        idTemp,
        image,
      });
      setName("");
      setHeightMax("");
      setHeightMin("");
      setWeightMax("");
      setWeightMin("");
      setYearsLifeMax("");
      setYearsLifeMin("");
      setImage("");
      setIdTemp("");
      alert("raza creada con exito");
    } catch (error) {
      alert("error al crear la raza", error.message);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemps());
  }, []);

  return (
    <div className={style.containerAll}>
      <Link to="/home">
        <button className={style.btn}>Home</button>
      </Link>
      <h1 className={style.h1}>Crear raza</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={style.container}>
        <label htmlFor="name" className={style.label}>
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="heightMax" className={style.label}>
          Altura maxima
        </label>
        <input
          type="number"
          id="heightMax"
          value={heightMax}
          onChange={(e) => setHeightMax(e.target.value)}></input>
        <label htmlFor="heightMin" className={style.label}>
          Altura minima
        </label>
        <input
          type="number"
          id="heightMin"
          value={heightMin}
          onChange={(e) => setHeightMin(e.target.value)}></input>
        <label htmlFor="weightMax" className={style.label}>
          {" "}
          Peso maximo
        </label>
        <input
          type="number"
          id="weightMax"
          value={weightMax}
          onChange={(e) => setWeightMax(e.target.value)}></input>
        <label htmlFor="weightMin" className={style.label}>
          {" "}
          Peso minimo
        </label>
        <input
          type="number"
          id="weightMin"
          value={weightMin}
          onChange={(e) => setWeightMin(e.target.value)}></input>
        <label htmlFor="yearsLifeMax" className={style.label}>
          Años de vida maximo
        </label>
        <input
          type="number"
          id="yearsLifeMax"
          value={yearsLifeMax}
          onChange={(e) => setYearsLifeMax(e.target.value)}></input>
        <label htmlFor="yearsLifeMin" className={style.label}>
          Años de vida minimo
        </label>
        <input
          type="number"
          id="yearsLifeMin"
          value={yearsLifeMin}
          onChange={(e) => setYearsLifeMin(e.target.value)}></input>
        <label htmlFor="temp" className={style.label}>
          Temperamento
        </label>
        <select
          id="temp"
          type="text"
          onChange={(e) => setIdTemp(e.target.value)}>
          <option value="">Select Temperamento</option>
          {temps.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <label htmlFor="image" className={style.label}>
          Imagen
        </label>
        <input
          type="text"
          id="image"
          onChange={(e) => setImage(e.target.value)}></input>
        <button type="submit" value="Create">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
