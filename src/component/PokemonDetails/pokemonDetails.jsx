import axios from "axios"
import { useEffect, useState } from "react";
import  {useParams}   from "react-router-dom"

function PokemonDetails(){
     const {id} = useParams();
     const[pokemon, setPokemon] = useState({})
      console.log(id)

     async function DownloadPoke() {
     const responce  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
     console.log(responce.data)
        setPokemon({
             name: responce.data.name,
             image : responce.data.sprites.other.dream_world.front_default, 
             height : responce.data.height,
             weight : responce.data.weight
                

        }
          
        )
     }
     


     useEffect(()=>{
        DownloadPoke()
     },[])


    return(
        <div>
     
        <img src={pokemon.image} alt="" />
        <div className="name">Name:{pokemon.name}</div>
        <div className="weight"> Weight:{pokemon.weight}</div>
        <div className="height">Height:{pokemon.height}</div>
            
        </div>
    )
}
export default PokemonDetails