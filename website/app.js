/* Global Variables */
const apiKey = "API_KEY";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const postURL = "/add";
const getURL = "/getData";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", onClickGenerate);

function onClickGenerate() {
  let feelings = document.getElementById("feelings").value;
  let zip = document.getElementById("zip").value;

  if (isUserInputValid(feelings, zip)) {
    getWeatherFromAPI(zip)
      .then(function (data) {
        sendDataToServer(postURL, { temperature: data.main.temp,
            date: newDate, journalEntry: feelings })
        .then(updateUI(getURL));
      })
  } else {
    console.error("User input is not valid. Please check zip and input.");
  }
}

function isUserInputValid(feelings, zip) {
  return !isNaN(zip) && zip.length != 0 && feelings.length != 0;
}

const getWeatherFromAPI = async (zip) => {
  const response  = await fetch(apiURL + zip + '&appid=' + apiKey + '&units=imperial');
  try {
      const data = await response.json();
      return data;
  } catch(error) {
      console.error('error', error);
  };
};

const sendDataToServer = async (url, payload) => {
  const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type':'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
  });

  try {
      const data = await response.json();
      return data;
  } catch(error) {
      console.error('error', error);
  };
};

const updateUI = async(url) => {
  const response = await fetch(url);
  try {
      const data = await response.json();
      document.getElementById('date').innerHTML = data.date;
      document.getElementById('temp').innerHTML = data.temperature;
      document.getElementById('content').innerHTML = data.journalEntry;
  } catch(error) {
      console.log('error', error);
  };
};
