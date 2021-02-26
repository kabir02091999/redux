import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import PokeReducer from './pokemon'

const rootReducer = combineReducers({
    pokemones:PokeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}