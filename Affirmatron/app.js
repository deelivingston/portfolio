const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  // res.send("Post received");

  var data = {
    first: firstName,
    last: lastName,
    emailAddress: email,
    status: "new",
  };

/*
  const request = https.request("url", options, function(response) {
    response.on("data", function(respData) {
      console.log(JSON.parse(data));
    });
    request.write(jsonData);
    request.end();
  });
  */

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  var requestStatusCode = 200;
  if (data.first != "Diane") {
    requestStatusCode = 404;
  }

  if (requestStatusCode === 200) {
      res.sendFile(__dirname + "/success.html");
  } else {
      res.sendFile(__dirname + "/failure.html");
  }
});

app.post("/failure", function(req, resp) {
  resp.redirect("/");
});

app.listen(3000, function () {
  console.log("Listening on 3000");
});
