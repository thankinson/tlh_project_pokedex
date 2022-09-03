import {React, useState } from "react";

import { SearchTest } from "./pages/search";

const App =()=> {
  const [pokemon, setPokemon] = useState()

  return (
    <div>
      <SearchTest pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
