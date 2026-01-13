import React, { useEffect, useState } from "react";

const Card = () => {
  const [temp, setTemp] = useState("--");
  const [dir, setDir] = useState("--");
  const [speed, setSpeed] = useState("--");

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=22.5726&longitude=88.3639&current_weather=true"
      );

      if (!res.ok) setTemp("N/A");
      
      const data = await res.json();
      console.log(data);

      setTemp(Math.round(data.current_weather.temperature));
      setSpeed(data.current_weather.windspeed);
      setDir(data.current_weather.winddirection);
    };

    fetchWeather();
  },[]);

  return (
    <div className="Container" id="card">
      <p id="title">WEATHER</p>
      <p id="state">
        <b>Kolkata</b>
      </p>

      <div className="small">
        <div className="prop" id="wind-dir">
          <img
            src="imgs/wind-direction.png"
            alt="WIND DIRECTION"
            style={{ transform: `rotate(${dir}deg)` }}
          />
          <p className="text">{dir}°</p>
        </div>

        <div className="prop" id="temp">
          <img src="imgs/weatyher.jpg" alt="Temperature" />
          <p className="text">{temp}°C</p>
        </div>

        <div className="prop" id="wind-speed">
          <img src="imgs/storm.png" alt="WIND SPEED" />
          <p className="text">{speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
