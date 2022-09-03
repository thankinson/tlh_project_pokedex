import {React, useState} from "react";

const { REACT_APP_POKE_KEY } = process.env

export const pokemonApi = async ({pokemon, setPokemon, search}) =>{
    try {     
        const response = await fetch(`${REACT_APP_POKE_KEY}${search}`);
        const data = await response.json();
        setPokemon(data.results);
        } catch(errorLog){
            console.log(errorLog);
        }
    };