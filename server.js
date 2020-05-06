// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Add body-parser
const bodyParser = require('body-parser');

// Add cors
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
};

app.post('/add', function (req, res) {
  node = {
    temperature: req.body.temperature,
    date: req.body.date,
    journalEntry: req.body.journalEntry
  }
  projectData = node;
});

app.get('/getData', function (req, res) {
  res.send(projectData);
});
