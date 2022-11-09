import styled from "styled-components"

export const PokeResults = ({pokeResult})=>{

    return(
        <>
        {pokeResult && 
            <>
                <PokeMonImgDiv>
                    <ImgContainerDiv>
                        <Img src={`${pokeResult.img}`} alt={`${pokeResult.species}`}/>
                    </ImgContainerDiv>
                </PokeMonImgDiv>
                <PokeMonInfo>
                    <PokeMonInforInnerDiv>
                        <h2>Pokemon</h2>
                        <p>Species: {pokeResult.species}</p>
                        <p>Pokemon type: {pokeResult.type}</p>
                        <p>pokedex Number: {pokeResult.id}</p>
                    </PokeMonInforInnerDiv>
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
    background-color: black;
    border-radius: 10px;
`
    const ImgContainerDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 90%;
        border-radius: 10px;
        background-color: #7d7784;
        background-size: 40px 40px;
        background-image:
            linear-gradient(to right, #202020 1px, transparent 1px),
            linear-gradient(to bottom, #202020 1px, transparent 1px);
            border: solid 2px yellow;
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
    /* border: solid 1px yellow; */
    background-color: #1b1b1b;
    border-radius: 10px;
`
    const PokeMonInforInnerDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 90%;
        border-radius: 10px;
        background-color: #ffffff;
    `