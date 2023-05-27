"use client"

import { useState } from "react";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function TestComponent ({ show }) {
  const [toShow, setToShow] = useState(show);

  async function changeData() {
    const newData = await fetch('https://restcountries.com/v3.1/region/europe');
    const newDataJson = await newData.json();
    setToShow(newDataJson[randomIntFromInterval(0, 20)].name.common);
  }

  async function callHello() {
    const data = await fetch('/api/hello');
    const dataJson = await data.json();
    console.log(JSON.stringify(dataJson));
  }

  return(
    <div>
      TEST COMPONENT {toShow}
      <button onClick={changeData}>Change</button>
      <button onClick={callHello}>Call Hello</button>
    </div>
  );
};
