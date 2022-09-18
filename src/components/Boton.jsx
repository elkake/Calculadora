import React from 'react';
import '../styles/Boton.css';
function Boton(props) {
  const buttonFn = dato => {
    return isNaN(dato) && dato != '=' && dato != '.';
  };
  return (
    <div
      className={`button ${buttonFn(props.children) ? 'notNumber' : null}`}
      onClick={()=>props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
