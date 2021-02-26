import axios from 'axios'

// constantes
const dataInicial ={
    array:[]
}

//types
const OBTENET_POKEMONES_EXITO = 'obtener_pokemones_exito';


//reducer
export default function PokeReducer(state = dataInicial, action){
    
    switch(action.type){
        case OBTENET_POKEMONES_EXITO:
            return {...state , array: action.payload}
        default:
            return state
    }
}

//acciones
export const obtenerpokemonesaccion = (uno) => async (dispatch,getState) =>{
    console.log(uno)
    try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    dispatch({
        type: OBTENET_POKEMONES_EXITO,
        payload: res.data.results
    })
    }catch (error) {
        console.log(error)
    }
}

/* export const OCTENER_MAS_POKEMONES = () => async (dispatch,getState) => {

    const stado = getState().pokemones.offset
    const offSet = stado + 20

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`)
        dispatch({
            type:CAMBIO_POKEMONES_EXITO,
            payload:{
                array:res.data.results,
                offset:offSet
            }

        })

    } catch (error) {
        console.log(error)
    }

} */