"use client"

import { useState } from "react";

export default function TestComponent ({ show }) {
  const [toShow, setToShow] = useState(show);

  async function changeData() {
    const newData = await fetch('https://restcountries.com/v3.1/name/uruguay');
    const newDataJson = await newData.json();
    setToShow(newDataJson[0].name.common);
  }

  return(
    <div>
      TEST COMPONENT {toShow}
      <button onClick={changeData}>Change</button>
    </div>
  );
};
