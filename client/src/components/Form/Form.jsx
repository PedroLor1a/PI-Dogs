import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTemps } from "../../redux/actions";

const Form = () => {
  const [name, setName] = useState("");
  const [heightMax, setHeightMax] = useState("");
  const [heightMin, setHeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [yearsLifeMax, setYearsLifeMax] = useState("");
  const [yearsLifeMin, setYearsLifeMin] = useState("");
  const [image, setImage] = useState(null);
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
      alert("el Nombre no puede tener mas de 30 caracteres");
      return;
    }

    // if (
    //   heightMax.length > 99 ||
    //   heightMin.length > 99 ||
    //   weightMax.length > 99 ||
    //   weightMin.length > 99 ||
    //   yearsLifeMax.length > 99 ||
    //   yearsLifeMin.length > 99
    // ) {
    //   alert("La altura, el peso o los años de vida no pueden ser mayores a 99");
    //   return;
    // }
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
    <div>
      <h1>Crear raza</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="heightMax">altura maximo</label>
        <input
          type="number"
          id="heightMax"
          value={heightMax}
          onChange={(e) => setHeightMax(e.target.value)}></input>
        <label htmlFor="heightMin">altura minimo</label>
        <input
          type="number"
          id="heightMin"
          value={heightMin}
          onChange={(e) => setHeightMin(e.target.value)}></input>
        <label htmlFor="weightMax"> peso maximo</label>
        <input
          type="number"
          id="weightMax"
          value={weightMax}
          onChange={(e) => setWeightMax(e.target.value)}></input>
        <label htmlFor="weightMin"> peso minimo</label>
        <input
          type="number"
          id="weightMin"
          value={weightMin}
          onChange={(e) => setWeightMin(e.target.value)}></input>
        <label htmlFor="yearsLifeMax">años de vida maximo</label>
        <input
          type="number"
          id="yearsLifeMax"
          value={yearsLifeMax}
          onChange={(e) => setYearsLifeMax(e.target.value)}></input>
        <label htmlFor="yearsLifeMin">años de vida minimo</label>
        <input
          type="number"
          id="yearsLifeMin"
          value={yearsLifeMin}
          onChange={(e) => setYearsLifeMin(e.target.value)}></input>
        <label htmlFor="temp">temperamento</label>
        <select
          id="temp"
          type="text"
          onChange={(e) => setIdTemp(e.target.value)}>
          <option value="">Select Temp</option>
          {temps.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <label htmlFor="image">image</label>
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
