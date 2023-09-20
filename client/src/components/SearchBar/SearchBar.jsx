import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [dog, setDog] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    try {
      if (dog.trim() !== "") {
        fetch(`http://localhost:3001/dogs/?name=${dog}`)
          .then((response) => response.json())
          .then((data) => setResults(data))
          .catch((error) => console.error("Error fetching data:", error));
      } else {
        setResults([]);
      }
    } catch (error) {
      alert("Hubo un error:", error.message);
    }
  }, [dog]);

  return (
    <div className={style.containerSearch}>
      <div className={style.containerDiv}>
        <input
          type="search"
          placeholder="Search..."
          className={style.input}
          value={dog}
          onChange={(event) => setDog(event.target.value)}
        />
      </div>
      <div>
        <Link to="/form">
          <button className={style.btn}>Form</button>
        </Link>
        <Filters />

        {results.map((result) => (
          <div key={result.id} className={style.container}>
            <Card
              key={result.id}
              id={result.id}
              name={result.name}
              image={result.image}
              temperaments={result.temperament}
              weigth={result.weigth}
              weightMax={result.weightMax}
              weightMin={result.weightMin}
              heightMax={result.heightMax}
              heightMin={result.heightMin}
              idTemp={result.idTemp}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
