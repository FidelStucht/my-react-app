import React, { useState } from "react";

export default function Weathertemperature(props) {
  // eslint-disable-next-line
  const [unit, setUnit] = useState("celsius");

  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </span>
  );
}
