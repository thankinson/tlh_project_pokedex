import {React, useState} from "react";

import { PokeResults } from "../content/pokeresults";

import styled from "styled-components";

const { REACT_APP_POKE_KEY } = process.env

export const SearchPokemon =({pokemon, setPokemon})=>{
    const [pokeResult, setPokeResult] = useState({
        species: "", 
        id: "",
        type: "",
        img: ""
    })

    const [chosen, setChosen] = useState(false);

    const PokemonApi = async () =>{
        try {     
            const response = await fetch(`${REACT_APP_POKE_KEY}${pokemon}`);
            const data = await response.json();
            console.log(data);
            setPokeResult({species: data.species.name,id: data.id, img: data.sprites.front_default, type: data.types[0].type.name});
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
        <PokeSearchDiv>
            <SearchForm  onSubmit={SubmitHandler}>
            <input type="text" placeholder="Pokemon search" onChange={(e)=> setPokemon(e.target.value)}/>
            <button>Search</button>
            </SearchForm >
            
            <ReturnedResultsDiv>
            {!chosen ? <p> please choose pokemon</p> : <PokeResults pokeResult={pokeResult}/>}
            </ReturnedResultsDiv>
        </PokeSearchDiv>
    )
}

const PokeSearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    height: 61vh;
    background-color: #d0c8c8;
    border-radius: 5px;
    border: solid 5px #000000d1;
`
const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    border-bottom:  solid 2px #404040d1;
    background-color: #2a2a2a;
`
const ReturnedResultsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: solid 1px black;
    background-size: 100px 100px;
        background-image:
            linear-gradient(to right, #202020 1px, transparent 1px),
            linear-gradient(to bottom, #202020 1px, transparent 1px);
`