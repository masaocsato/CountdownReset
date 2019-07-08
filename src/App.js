import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Countdown from "react-countdown-now";

function App() {
  return (
    <div>
      <div>
        <Countdown date={Date.now() + 10000} />
      </div>
      <div>
        <button type="button" onClick={this.resetTimer()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
