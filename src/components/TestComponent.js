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

  return(
    <div>
      TEST COMPONENT {toShow}
      <button onClick={changeData}>Change</button>
    </div>
  );
};
