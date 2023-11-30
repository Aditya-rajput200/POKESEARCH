
import { Link } from 'react-router-dom';
import './pokemon.css'
function Pokemon ({name, url , id}) {
      return (
        <div className=" Pokemon-wrapper">
             <Link to =   {`/pokemon/${id}`} >
             <div className="Pokemon">

            <div className="name"> {name}</div>

            <div className="Image" > <img  id='img' src= {url} alt="-" /></div>
           </div>

             </Link>
           
        </div>
      )
}
export default Pokemon;