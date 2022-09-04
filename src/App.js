import {React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalstyles/globalstyles.css"

// import { SearchTest } from "./pages/search";
import { Home } from "./pages/home";

const App =()=> {
  const [pokemon, setPokemon] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home pokemon={pokemon} setPokemon={setPokemon}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


