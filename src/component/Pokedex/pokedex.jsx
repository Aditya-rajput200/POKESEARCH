import Pokemonlist from "../../PokemonList/pokemonlist";
import Search from "../Search/Search";
import './pokedex.css'
function Pokedex (){
    return(  
    
    <>
      
      <div className="Pokedex">
       
          <Search/>
      </div>

      <Pokemonlist/>
    
    </>
    
    )
}

 export default Pokedex;
