import React from "react";
import ReactDOM from "react-dom";
import MySVG from "./twitter.svg"

const App = () => {
  return <div>
    <div>Twitter icon:</div>
    <div><MySVG/></div>
  </div>
};

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);