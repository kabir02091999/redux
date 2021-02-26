import axios from 'axios'

// constantes
const dataInicial ={
    array:[],
    offset:0
}

//types
const OBTENET_POKEMONES_EXITO = 'obtener_pokemones_exito'
const MAS_POKEMONES_EXITO = 'MAS_POKEMONES_EXITO'

//reducer
export default function PokeReducer(state = dataInicial, action){
    
    switch(action.type){
        case OBTENET_POKEMONES_EXITO:
            return {...state , array: action.payload}
        case MAS_POKEMONES_EXITO:
            return {...state , array: action.payload.array, offset: action.payload.offset}
        default:
            return state
    }
}

//acciones
export const obtenerpokemonesaccion = (uno) => async (dispatch,getState) =>{
    /* console.log(uno) */
    const offset = getState().pokemones.offset
    try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit=20')
    dispatch({
        type: OBTENET_POKEMONES_EXITO,
        payload: res.data.results
    })
    }catch (error) {
        console.log(error)
    }
}

 export const OCTENER_MAS_POKEMONES = () => async (dispatch,getState) => {

    const stado = getState().pokemones.offset
    const offSet = stado + 20

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`)
        dispatch({
            type:MAS_POKEMONES_EXITO,
            payload:{
                array:res.data.results,
                offset:offSet
            }

        })

    } catch (error) {
        console.log(error)
    }

} 