import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen()
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen()
      }
      runCb(true)
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      if (document.requestFullscreen) {
        document.requestFullscreen();
      } else if (document.mozRequestFullScreen) {
        document.mozRequestFullScreen();
      } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen()
      } else if (document.msRequestFullscreen) {
        document.msRequestFullscreen()
      }
      runCb(false)
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We Are full" : "We Are small");
  };

  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Make Full Screen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
