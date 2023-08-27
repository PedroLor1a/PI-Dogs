import { useState, useEffect } from "react";
import Card from "../Card/Card";

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
    <div>
      <input
        type="search"
        placeholder="Search..."
        value={dog}
        onChange={(event) => setDog(event.target.value)}
      />
      <div>
        {results.map((result) => (
          <div key={result.id}>
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
