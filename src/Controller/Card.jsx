import React, { useEffect, useState } from "react";

const cities = {
  Kolkata: { lat: 22.5726, lon: 88.3639 },
  Delhi: { lat: 28.6139, lon: 77.2090 },
  Mumbai: { lat: 19.0760, lon: 72.8777 },
  Chennai: { lat: 13.0827, lon: 80.2707 },
  Bengaluru: { lat: 12.9716, lon: 77.5946 },
  Hyderabad: { lat: 17.3850, lon: 78.4867 },
};

const Card = () => {
  const [city, setCity] = useState("Kolkata");
  const [temp, setTemp] = useState("--");
  const [dir, setDir] = useState("--");
  const [speed, setSpeed] = useState("--");

  useEffect(() => {
    const fetchWeather = async () => {
      const { lat, lon } = cities[city];

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );

      if (!res.ok) {
        setTemp("N/A");
        return;
      }

      const data = await res.json();
      console.log(data);

      setTemp(Math.round(data.current_weather.temperature));
      setSpeed(data.current_weather.windspeed);
      setDir(data.current_weather.winddirection);
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="Container" id="card">
      <p id="title">WEATHER</p>

      <select
        className="city-select"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {Object.keys(cities).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <p id="state">
        <b>{city}</b>
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
