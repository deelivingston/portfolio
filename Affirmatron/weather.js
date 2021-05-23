const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const zip = req.body.zipCode;
  const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=81db9cbf48ca8710acba38454971d677&units=imperial";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const iconId = weatherData.weather[0].icon;
      console.log("Temp: " + temp);
      console.log(desc);

      const iconImg = " https://openweathermap.org/img/wn/" + iconId + "@2x.png";
      res.write("<h1>Durango Weather</h1>");
      res.write("<img src=" + iconImg + ">");
      res.write("<h2>Durango is " + desc + " with a temperature of " + temp + "</h2>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Listening on 3000");
});
