import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0 ) => {
  // if(typeof duration !== "number") {
  //   return;
  // }
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  return { ref: element, style: { opacity: 0 } }
}


const App = () => {
  const FadeInH1 = useFadeIn(1, 1)
  const FadeInP = useFadeIn(2, 5)
  return (
    <div className="App">
      <h1 {...FadeInH1}>hello</h1>
      <p {...FadeInP}>lorem itsup laalal</p>
    </div>
    )

}


ReactDOM.render(<App />, document.getElementById('root'));

