import Boton from '../components/Boton';
import BotonClear from '../components/BotonClear';
import Pantalla from '../components/Pantalla';
import '../styles/App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      if (evaluate(input) == 'Infinity') {
        return setInput('');
      }
      setInput(evaluate(input));
    } catch (error) {
      setInput('error');
      setTimeout(() => setInput(''), 500);
    }
  };
  return (
    <div className="container">
      
      <div className="container-calculator">
        <Pantalla input={input} />
        <div className="container-button">
          <div className="button-row">
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className="button-row">
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className="button-row">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className="button-row">
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className="button-row">
            <BotonClear
              manejarClear={() => {
                setInput('');
              }}
            >
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
