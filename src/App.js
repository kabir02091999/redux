import React from 'react';
import Pokemones from './componentes/Pokemones';

import {Provider} from 'react-redux'
import generateStore from './redux/store'

/* hay dos ramas multiples y main */

function App() {
  
  const store = generateStore()
  
  return (
    <Provider store={store} >
      <Pokemones/>
    </Provider>
  );
}

export default App;
