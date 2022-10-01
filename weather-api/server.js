// http://api.weatherapi.com/v1/search.json?key=540ed0efbe4745558f8125130220110&q=London
// https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=04249868cf395156bed6409ac6c803c9
const express = require("express");
const request = require("request");
const fs = require("fs");
const app = express();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const cities = require("./cities.json");
const multipleCities = [];
app.get("/", (req, res) => {
  let city = req.query.city;
  let page = parseInt(req.query.page);
  let date = req.query.date;
  console.log(date);
  if (isNaN(page)) {
    page = 1;
  }
  const noOfCities = cities.slice((page - 1) * 9, page * 27);
  if (city && date) {
    // Forecast Search
    request(
      `http://api.weatherapi.com/v1/future.json?key=540ed0efbe4745558f8125130220110&q=${city}&dt=${date}`,
      function (error, response, body) {
        var data = JSON.parse(body);
        console.log(data);
        if (response.statusCode === 200) {
          res.send(data);
          return;
        } else if (response.statusCode === 404) res.send(data);
      }
    );
  } else if (city) {
    // Only City search response
    console.log("city search called");
    request(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=04249868cf395156bed6409ac6c803c9`,
      function (error, response, body) {
        var data = JSON.parse(body);
        if (response.statusCode === 200) {
          res.send(data);
          return;
        } else if (response.statusCode === 404) res.send(data);
      }
    );
  } else {
    //Multiple City response
    noOfCities.map((city) => {
      request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=04249868cf395156bed6409ac6c803c9`,
        function (error, response, body) {
          var data = JSON.parse(body);
          if (response.statusCode === 200) {
            multipleCities.push(data);
          } else if (response.statusCode === 404) console.log("error", error);
        }
      );
    });
    res.send(multipleCities);
    res.end();
  }
});
app.listen(3000, () => console.log("server running"));
