import React from "react";
// http://openweathermap.org/img/w/" + icon + ".png"
function Card({ data }) {
  var celcius = parseFloat(((parseInt(data.main.temp) - 32) * 5) / 9).toFixed(
    2
  );
  var cityCard = (
    <div className="ui card">
      <div className="content">
        <div className="header">{data.name}</div>
        <div className="meta">
          <span className="right floated time">{data.weather[0].main}</span>
          <span className="category">{celcius}℃</span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
      <div className="extra content">
        <div className="left floated author">
          <li>Longitudes: {data.coord.lon}</li>
          <li>Latitude: {data.coord.lat}</li>
        </div>
        <div className="right floated author">
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );

  return <div className="centre">{cityCard}</div>;
}

export default Card;
