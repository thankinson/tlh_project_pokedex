import styled from "styled-components"

export const PokeResults = ({pokeResult})=>{

    return(
        <>
        {pokeResult && 
            <>
                <PokeMonImgDiv>
                <Img src={`${pokeResult.img}` } alt=""/>
                </PokeMonImgDiv>
                <PokeMonInfo>
                <p>pokemon name: {pokeResult.species}</p>
                <p>pokemont type: {pokeResult.type}</p>
                </PokeMonInfo>
            
            </>}

        </>
    )
}

const PokeMonImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 95%;
    border: solid 1px yellow;
`
    const Img = styled.img`
        min-width: 50%;
    `
const PokeMonInfo = styled.div`
       display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 95%;
    border: solid 1px yellow;
`