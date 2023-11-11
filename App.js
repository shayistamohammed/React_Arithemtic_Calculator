import React,{useState} from "react";
import './App.css';
function App() {
  const[number,setNumber]=useState(0);
  const[number2,setNumber2]=useState(0);
  const[add,setTotal]=useState(number + number2);
  const[sub,setDiff]=useState(number - number2);
  const[mul,setMul]=useState(number * number2);
  const[div,setDiv]=useState(number / number2);
  function addtotal(){
    setTotal(number + number2)
  }
  function subTotal(){
    setDiff(number - number2)
  }
  function mulTotal(){
    setMul(number * number2)
  }
  function divTotal(){
    setDiv(number / number2)
  }
  return (
    <div className="App">
      <h1>Addition of Two Numbers</h1>
      <div className="input-numbers">
        <input type="number" placeholder="0" value={number} onChange={e => setNumber(+e.target.value)}/>
        <br>
        </br>
        <input type="number" placeholder="0" value={number2}onChange={e=> setNumber2(+e.target.value)}/>
      </div>
      <br>
      </br>
      <button onClick={addtotal}>ADD NUMBERS</button>
      <h1>{add}</h1>
      <br>
      </br>
      <button onClick={subTotal}>SUBTRACTING </button>
      <h1>{sub}</h1>
      <br>
      </br>
      <button onClick={mulTotal}>MULTIPLY </button>
      <h1>{mul}</h1>
      <br>
      </br>
      <button onClick={divTotal}>DIVIDE</button>
      <h1>{div}</h1>
    </div>
  );
}


export default App;