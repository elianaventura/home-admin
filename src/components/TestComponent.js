"use client"

import { useState } from "react";

export default async function TestComponent ({ show }) {
  const [toShow, setToShow] = useState(show);

  async function changeData() {
    const newData = await fetch('https://restcountries.com/v3.1/name/uruguay');
    const newDataJson = await newData.json();
    setToShow(newDataJson[0].name.common);
  }

  function change() {
    setToShow('uruguay');
  }

  return(
    <div>
      TEST COMPONENT {toShow}
      <button onClick={change}>Change</button>
    </div>
  );
};
