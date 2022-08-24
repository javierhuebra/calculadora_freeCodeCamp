import './App.css';
import freeCodeCampLogo from './images/logo-freecodecamp.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

import ImagenFreeCode from './components/ImagenFreeCode';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    /* if(input[input.length]=='+' || input[input.length]=='-' || input[input.length]=='*' || input[input.length]=='/'){
      if(val==input[input.length]){
        alert("No se puede poner dos signos de operacion seguidos!");
      }else{
        setInput(input + val);//el simbolo de suma esta sumando cadenas, esta concatenando
      }
    } */
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar los cálculos.");    
    }
    
  };

  return (
    <div className='App'>
      <ImagenFreeCode imagenLogo={freeCodeCampLogo}/>
      <div className='contenedor-calculadora'> 
        <Pantalla input={input}/> 
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={ () => setInput('') }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
