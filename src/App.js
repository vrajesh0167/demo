import { useState } from 'react';
import './App.css';
import Smethods from './Components/Smethods';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")

  const incriment = () =>{
    setCount(prevCount => prevCount + 1)
    setName("Increment")
  }
  const decrement = () =>{
    setCount(prevCount => {
      if(prevCount < 1){
        return prevCount = 0;
      }else{
        return prevCount -1;
      }
    })
    // if(count < 1){
    //   setCount(prevCount => prevCount = 0)
    // }else{
    //   setCount(prevCount => prevCount - 1)
    // }
    setName("Decrement")
  }
  return (
    <div className=' container mt-5'>
      <h2>First Methods</h2>
      <button onClick={incriment}>+</button> {count} {name} <button onClick={decrement}>-</button>
      <h2>Second Methods</h2>
      <Smethods></Smethods>
    </div>
  );
}

export default App;
