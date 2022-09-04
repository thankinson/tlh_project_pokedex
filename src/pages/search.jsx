import {React, useState} from "react";

import { PokeResults } from "../content/pokeresults";

const { REACT_APP_POKE_KEY } = process.env

export const SearchTest =({pokemon, setPokemon})=>{
    const [pokeResult, setPokeResult] = useState({
        species: "", 
        img: ""
    })

    const [chosen, setChosen] = useState(false);

    const PokemonApi = async () =>{
        try {     
            const response = await fetch(`${REACT_APP_POKE_KEY}${pokemon}`);
            const data = await response.json();
            console.log(data);
            setPokeResult({species: data.species.name, img: data.sprites.front_default, type: data.types[0].type.name});
            } catch(errorLog){
                console.log(errorLog);
            }
            setChosen(true);
    }

    const SubmitHandler =(e)=>{
        e.preventDefault();
        PokemonApi();
    };

    return(
        <>
        <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Pokemon search" onChange={(e)=> setPokemon(e.target.value)}/>
        <button>Click to search</button>
        </form>
        
        <div>
        {!chosen ? <p> please choose pokemon</p> : <PokeResults pokeResult={pokeResult}/>}
        </div>
        </>
    )
}