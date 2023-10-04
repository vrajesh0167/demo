import React,{useState} from 'react'

export default function Smethods() {
    const [state, setState] = useState({counter: 0, names:""})
    const counter = state.counter
    const names = state.names

    const increment = () =>{
        setState(prevstate => {
            return{
                counter : prevstate.counter + 1, 
                names : "Increment"
            }
        })
    }
    const decrement = () =>{
        setState(prevstate => {
            if(counter < 1){
                return{ 
                    counter : 0,
                    names : ""
                }    
            } else {
                return {
                    counter : prevstate.counter - 1, 
                    names : "Decrement"
                }
            }
        })
    }
    return (
        <div>
            <button onClick={increment}>+</button>{counter} {names} <button onClick={decrement}>-</button>
        </div>
    )
}
