var express = require("express");
var app = express();

// Add nav bar with logo, material box for image inspection, reveal card, modal (call it first) form, collect data from form timestamp 1:17:39 (-0:20:00)

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App running at http://localhost:" + port);
});
