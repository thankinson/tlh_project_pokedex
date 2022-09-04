export const PokeResults = ({pokeResult})=>{

    return(
        <>
        {pokeResult && console.log(`this is search result on PokeResults ${pokeResult.species} and ${pokeResult.img}`)}
        {pokeResult && 
            <div>
                <p>pokemon name: {pokeResult.species}</p>
                <p>pokemont type: {pokeResult.type}</p>
                <img src={`${pokeResult.img}`} />
            
            </div>}

        </>
    )
}