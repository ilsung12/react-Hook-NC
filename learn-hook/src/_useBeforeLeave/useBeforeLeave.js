import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const useBeforLeave = (onBefore) => {
  if(typeof onBefore !== "function"){
    return;
  }
  const handle = (event) =>{
    const { clientY } = event
    if (clientY <= 0) {
      onBefore()
    }
    
  };

  useEffect(()=>{
    document.addEventListener("mouseLeave", handle)
    return () => document.removeEventListener("mouseLeave", handle)
  }, [])
};


const App = () => {
  const begForLife = () => console.log("Plz dont leave")
  useBeforLeave(begForLife)
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
    )

}

export default App;