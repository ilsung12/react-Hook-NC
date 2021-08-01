import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" ) {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection()
    }
  }
  return confirmAction;
}



const App = () => {
  const deleteWorld = () => console.log("deleting the world..")
  const abort = () => console.log("aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  return (
    
    <div className="App">
      <button>Delete the world</button>
      
    </div>
    )

}



export default App;
