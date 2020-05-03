/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", onClickGenerate);

function onClickGenerate() {
  if (isUserInputValid()) {
    console.log("valid input")
    getWeatherFromAPI();
    sendDataToServer();
    updateUI();
  } else {
    console.error("User input is not valid. Please check zip and input.");
  }

}

function isUserInputValid() {
  let feelings = document.getElementById("feelings").value;
  let zip = document.getElementById("zip").value;

  return !isNaN(zip) && zip.length != 0 && feelings.length != 0;
}
