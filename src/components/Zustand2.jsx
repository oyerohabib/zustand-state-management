import React, { useEffect } from "react";
import { useSettingStore } from "../App/courseStore";
import People from "./People";

const Zustand2 = () => {
  const toggleDarkMode = useSettingStore((state) => state.toggleDarkMode)
  const dark = useSettingStore((state) => state.dark);
  
  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark")
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark])

  return (
    <div className="main-container">
      <button onClick={toggleDarkMode}>Toggle Theme</button>
      <div className="people-container">
        <h1>people</h1>
        <People/>
      </div>
    </div>
  );
};

export default Zustand2;
