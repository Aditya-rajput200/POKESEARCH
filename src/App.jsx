
import { Link } from 'react-router-dom'
import './App.css'

import CustumRoutes from './Route/costusmRoutes'

function App() {


  return(
    <> 
    <Link to={'/'}>
    <div className='Pokedex'>
         <h1 className="header">

            Pokédex
</h1> 

</div>
</Link>
      <CustumRoutes/>
    </>
  )
  
}

export default App
