import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
