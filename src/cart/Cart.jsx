

import { useState } from "react";
import "./Cart.css";

function Cart(){
    let [num,setNum]=useState(0);

    function increment(){
        setNum(num+1);
    }
    function Decrement(){
        setNum(num-1);
    }
    function reset(){
        setNum(0);
    }

    return(
        <div className="main">
          <h1 className="header-name">Counter : {num}</h1>
          <button className="increment-btn" onClick={increment}>Increment</button>
          <button className="increment-btn" onClick={Decrement}>Decrement</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
    );
}
export default Cart;