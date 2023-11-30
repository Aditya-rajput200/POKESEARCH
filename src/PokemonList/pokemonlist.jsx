// first fetch the api and download the pokemon 
// then outline the img and name 
import axios from 'axios'
import { useEffect, useState } from 'react';
import Pokemon from '../component/Pokemon/pokemon';
import './pokemonList.css'

 function   Pokemonlist () {
    const [PokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
     

    const [pokemonUrl , setPokemonUrl] =useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");

    const [nextUrl , setNexxtUrl] = useState("");
    const [previousUrl, setPreviousUrl] =useState('');



async function DownloadPokemon(){
    const   responce =  await axios.get(pokemonUrl);

    setIsLoading(true)

    const downloaPokemon = responce.data.results;

    setNexxtUrl(responce.data.next);
    setPreviousUrl(responce.data.previous);

    const pokemonPromice = downloaPokemon.map((pokemon)=>axios.get(pokemon.url));
    const pokemonData = await axios.all(pokemonPromice);
   
    const res =  pokemonData.map((pokeData)=>{

        return{
            name: pokeData.data.name,
            id : pokeData.data.id, 
            url : ( pokeData.data.sprites.other) ?  pokeData.data.sprites.other.dream_world.front_default : pokeData.data.sprites.front_shiny,
        }
    })
    
    setPokemonList(res)
    setIsLoading(false)
    

}
  

   useEffect( ()=>{
    

DownloadPokemon();
},[pokemonUrl])

return (
    <div className='PokemonList-wrpper' >
       <div className='heading-wrpper'> 
         <h3>Pokemon list</h3>
       </div>
       
       <div className='PokemonList'>
          {
            (isLoading) ? 'Wait pokemon is downloading ': PokemonList.map((p)=> <Pokemon   id = {p.id} name={p.name} url = {p.url} key ={p.id} />)
          }

       </div>
           
           <div className='controlers'>
           <button  disabled={previousUrl==undefined} onClick={()=> setPokemonUrl(previousUrl)}>Previous</button>
            <button disabled= {nextUrl == undefined}  onClick={()=> setPokemonUrl(nextUrl)}>Next</button>
      
           </div>

    </div>
)
    
}

export default Pokemonlist