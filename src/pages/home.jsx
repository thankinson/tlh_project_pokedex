import styled from "styled-components"
import { SearchPokemon } from "./search"

export const Home =({pokemon, setPokemon})=>{
    return(
        <>
        <PokeDex>
            <DexDarkRedFrame>
                <SearchPokemon pokemon={pokemon} setPokemon={setPokemon}/>
            </DexDarkRedFrame>
        </PokeDex>
        </>
    )
}
const PokeDex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 80vh;
    border-radius: 50px;
    border: solid red 1px;
    background-color: #CC0000;
`

const DexDarkRedFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 55vw;
    height: 70vh;
    background-color: #FF0000;
    border-radius: 25px;
    border: solid 1px black;

`