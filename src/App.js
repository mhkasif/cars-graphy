import "./App.css";
import React, { createContext, useState } from "react";
import Home from "./Pages/Home/Home";
import Avenger from "./Pages/Avenger/Avenger";
import Thanos from './Pages/Avenger/Thanos';
import { Data } from "./data";
import { POSITIONS } from "./Avengers_positioning";
import SpiderMan from "./Pages/Avenger/SpiderMan";
import Thor from "./Pages/Avenger/Thor";
import Nebula from "./Pages/Avenger/Nebula";
import Hulk from "./Pages/Avenger/Hulk";
import IronMan from "./Pages/Avenger/IronMan";
import Groot from "./Pages/Avenger/Groot";
import CaptainAmerica from "./Pages/Avenger/CaptainAmerica";
import BlackPanther from "./Pages/Avenger/BlackPanther";

const Compon=({counter})=>{

    switch (counter) {
      case 0:
        return <Hulk />;
      case 1:
        return <Thor />;

      case 2:
        return <SpiderMan />;

      case 3:
        return <Nebula />;

      case 4:
        return <Groot />;

      case 5:
        return <IronMan />;

      case 6:
        return <CaptainAmerica />;

      case 7:
        return <BlackPanther />;

      case 8:
        return <Thanos />;

      default:
        return <Hulk />;
    }

}
const avengersName = [
  "Hulk",
  "Thor",
  "SpiderMan",
  "Nebula",
  "Groot",
  "IronMan",
  "CaptainAmerica",
  "BlackPanther",
  "Thanos",
];
export const StateContext=createContext()

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    // if (counter + 1 >= avengersName.length) return;
    setCounter(((counter + 1)%avengersName.length));
  };
  const decrementCount = () => {
console.log("clicked");
const newVal= (((counter-1) % avengersName.length ) + avengersName.length ) % avengersName.length
console.log(newVal);

    setCounter(newVal);

  };

  return (
    <React.Fragment>
      {/* <Home/> */}
      <div style={{ position: "absolute", right: "20px", top: "10px" }}>
        <button onClick={decrementCount}>prev</button>
        <button onClick={incrementCount}>next</button>
      </div>
      <StateContext.Provider value={Data[avengersName[counter]]}>
      <Compon counter={counter}/>
      </StateContext.Provider>
      {/*  <Avenger
        data={Data[avengersName[counter]]}
        positions={POSITIONS[avengersName[counter]]}
        counter={counter}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      /> */}
    </React.Fragment>
  );
}

export default App;
