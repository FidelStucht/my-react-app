import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather deafultCity="Munich" />

      <footer>
        This project was coded by Fidelis Stuchtey and is
        <a href="https://github.com/FidelStucht/my-react-app" target="-blank">
          {" "}
          open sourced
        </a>
      </footer>
    </div>
  );
}
