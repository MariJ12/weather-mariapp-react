import React from "react";
import "./Weatherform.css";

export default function Weatherform() {
  return (
    <form className="SearchForm">
      <input
        className="form-control shadow"
        type="search"
        id="search"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
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
}
