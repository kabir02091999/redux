import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { obtenerpokemonesaccion } from '../redux/pokemon'

const Pokemones = () => {
    
    const dispatch = useDispatch()
    const pokemone = useSelector(store => store.pokemones.array)

    const uno = 2

    return ( <div>lista de pokemones

        <button onClick={() => dispatch(obtenerpokemonesaccion(uno))} >llamar</button>
        
        <ul>
            {pokemone.map(item=>(

               <li key={item.name}>{item.name}</li>

            ))}
        </ul>
       

    </div> );
}
 
export default Pokemones;