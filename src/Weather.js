import React from "react";
import Weatherform from "./Weatherform";
import Cityoverview from "./Cityoverview";

export default function Weather() {
  return (
    <div className="weather-app px-5 rounded-4 shadow-lg">
      <Weatherform />
      <Cityoverview />
    </div>
  );
}
