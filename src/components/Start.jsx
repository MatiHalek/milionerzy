import React, { useState, useEffect } from "react";
import {
  programmer,
  it,
  mechatronic,
  car_mechanic,
  mechanic,
  landscape_architect,
  electrican,
  advertsing_technican,
} from "../data";
const Start = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { setGameStart, setData } = props;

  useEffect(() => {
    setData(getRandomDistinctValuesFromArray(programmer, 15));
  }, []);

  const getRandomDistinctValuesFromArray = (array, count) => {
    if (count > array.length) {
      console.error("Count cannot be greater than the length of the array.");
      return [];
    }

    let result = [];
    let copiedArray = array.slice(); // Create a copy of the original array to avoid modifying it

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * copiedArray.length); // Generate a random index
      result.push(copiedArray[randomIndex]); // Add the value at the random index to the result
      copiedArray.splice(randomIndex, 1); // Remove the selected value from the copied array to prevent duplicates
    }

    return result;
  };
  const handleChanged = (e) => {
    switch (e.target.value) {
      case "programista":
        setData(getRandomDistinctValuesFromArray(programmer, 15));
        break;
      case "it":
        setData(getRandomDistinctValuesFromArray(it, 15));
        break;
      case "mechatronik":
        setData(getRandomDistinctValuesFromArray(mechatronic, 15));
        break;
      case "samochodowka":
        setData(getRandomDistinctValuesFromArray(car_mechanic, 15));
        break;
      case "mechanik":
        setData(getRandomDistinctValuesFromArray(mechanic, 15));
        break;
      case "architektura":
        setData(getRandomDistinctValuesFromArray(landscape_architect, 15));
        break;
      case "elektryk":
        setData(getRandomDistinctValuesFromArray(electrican, 15));
        break;
      case "reklama":
        setData(getRandomDistinctValuesFromArray(advertsing_technican, 15));
        break;
    }
  };

  return (
    <div className="game--start--box">
      <div className="game--start--wrapper">
        <img
          src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/10/Who-Wants-To-Be-A-Millionaire-Game-2020-Logo.png"
          className="app--logo"
        />
        <h1>Wybierz kategorię</h1>
        <select onChange={handleChanged} className="game--start--select">
          <option value="programista">Technik Programista</option>
          <option value="it">Technik Informatyk</option>
          <option value="mechatronik">Technik Mechatronik</option>
          <option value="mechanik">Technik Mechanik</option>
          <option value="elektryk">Technik Elektryk</option>
          <option value="reklama">Technik Reklamy</option>
          <option value="samochodowka">Technik Pojazdów Samochodowych</option>
          <option value="architektura">Technik Architektury Krajobrazu</option>
        </select>
        <button
          className="game--start--button"
          onClick={() => {
            setGameStart(true);
          }}
        >
          Zacznij grę
        </button>
      </div>
    </div>
  );
};

export default Start;
