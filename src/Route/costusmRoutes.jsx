import {Routes, Route} from 'react-router-dom';

import PokemonDetails from '../component/PokemonDetails/pokemonDetails';

import Pokedex from '../component/Pokedex/pokedex';
function  CustumRoutes (){

    return(
        <>
           <Routes>
            <Route path='/'  element = {<Pokedex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}  />
            
           </Routes>
           
        </>
    )
}
export default CustumRoutes