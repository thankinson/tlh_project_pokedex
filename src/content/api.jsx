import {React, useState} from "react";

const { REACT_APP_POKE_KEY } = process.env


export const PokemonApi = async ({pokemon, setPokeResult}) =>{
    console.log(`${pokemon} on PokemonApi search`)
    try {     
                const response = await fetch(`${REACT_APP_POKE_KEY}${pokemon}`);
                const data = await response.json();
                console.log(data)
                setPokeResult(data.results);
                } catch(errorLog){
                    console.log(errorLog);
                }

}
