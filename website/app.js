/* Global Variables */
const apiKey = "API_KEY";

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
        sendDataToServer();
        updateUI();
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

const sendDataToServer = async (url, data) => {
  console.log("placeholder")
};
