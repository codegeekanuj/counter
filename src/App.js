import React, { useState } from "react";
import "./App.css"

const App = () => {
  let [counter, setCounter] = useState(0);
  let [inputvalues,setInputvalues]=useState("anuj");
  const increment = () => {
    setCounter(counter+1);
  };
  const decrement = () => {
    setCounter(counter-1);
  };
q
const onChange=(event)=>{
const hi=event.target.value ;
setInputvalues(hi);
};

  return (
    <>
    <body>
      <div>
      <button onClick={decrement}>decrement </button>
       { counter }
      <button onClick={increment}> increment</button>
      </div>
       <input placeholder="type something....." onChange={(e) => onChange(e)}/>
       {inputvalues}
    </body>
    </>
  );
};

export default App;
