import { useState } from 'react';
import './App.css';

export default function App() {

  const[disp, setdisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[num2, setNum2] = useState(null);
  const[op, setop] = useState(null);

  // const genericClickHandler = (e) => {
  //   e.preventDefault();
  //   const value  = e.target.innerHTML;
  //   console.log(value);
  // }
  
  const numClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    if(op === null){
      if(num1 === null){
        setNum1(value);
      }
      else{
        setNum1(num1 + value);
        setdisp(num1 + value);
      }
    }
    else {
      if(num2 === null){
        setNum2(value);
      }
      else{
        setNum2(num2 + value);
        setdisp(num2 + value);
      }
    }
  
    setdisp(value);
    console.log(num1);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);

    setop(value);
    setdisp(value);
    console.log(op);
  }

  const eqClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(num1 + '|' + op + '|' +num2);

    let result = null;
    if(op === "+"){
      result = parseInt(num1) + parseInt(num2);
    }
    else{
      result = "Error";
    }
    setdisp(result);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"÷"} clickHandler={opClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"x"} clickHandler={opClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={opClickHandler} />
          <Key label={"c"} clickHandler={opClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={eqClickHandler} />
          <Key label={"+"} clickHandler={opClickHandler} />
        </div>
      </div>
    </div>
  );
}


function Display({display}) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function Key({label, clickHandler}) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}
