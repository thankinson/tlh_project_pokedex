import {React, useState} from "react";

import { PokemonApi } from "../content/api";

// const { REACT_APP_POKE_KEY } = process.env

export const SearchTest =({pokemon, setPokemon})=>{
    // const [pokeResult, setPokeResult] = useState()
    // const [pokemon, setPokemon] = useState()


    // const PokemonApi = async () =>{
    //     try {     
    //                 const response = await fetch(`${REACT_APP_POKE_KEY}sandslash`);
    //                 const data = await response.json();
    //                 console.log(data)
    //                 setPokemon(data.results);
    //                 } catch(errorLog){
    //                     console.log(errorLog);
    //                 }

    // }

    const SubmitHandler =(e)=>{
        e.preventDefault()
        PokemonApi(pokemon={pokemon})
    };



    return(
        <>
        <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Pokemon search" onChange={(e)=> setPokemon(e.target.value)}/>
        <button>Click to search</button>
        </form>
        
        </>
    )
}