import React from "react";
import "./Weatherform.css";

export default function Weatherform() {
  const [city, showCity] = useState("");
  const [weather, setMessage] = useState({});
  const [temperature, cityForecast] = useState(false);
  console.log();

  function showWeather(response) {
    cityForecast(true);
    setMessage({
      city: response.data.city,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function typedCity(event) {
    showCity(event.target.value);
  }
  let form = (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="form-control shadow"
        type="search"
        id="search"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
        onChange={typedCity}
      />

      <button type="submit" className="form-control btn shadow" id="search-btn">
        Search
      </button>

      <button
        type="submit"
        id="current-btn"
        className="form-control btn shadow"
      >
        Current
      </button>
    </form>
  );
  if (temperature) {
    return (
      <div className="Formapi">
        {form}
        <ul className="List">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humitity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
