window.addEventListener("load", function() {
 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
          let planetInfo = `
         <h2>Mission Destination</h2>
           <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
           </ol>
           <img src="${json[0].image}">
           `
           div.innerHTML = planetInfo;
      })
   })
 let form = document.querySelector("form");
 form.addEventListener("submit", function(event) {
    const divFaulty = document.getElementById("faultyItems");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let allFieldsCorrect = 'false';
    
    let pilotNameUpdate = `
    <ol>
     <li id="pilotStatus">${pilotNameInput.value} is Ready</li>
     <li id="copilotStatus">${copilotNameInput.value} is Ready</li>
     <li id="fuelStatus">Fuel level high enough for launch</li>
     <li id="cargoStatus">Cargo mass low enough for launch</li>
    </ol>
      `
    divFaulty.innerHTML = pilotNameUpdate;

    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
       alert("All fields are required.");
       event.preventDefault();
    } else if (!isNaN(pilotNameInput.value)) {
       alert("Invalid Pilot Name.");
       event.preventDefault();
    } else if (!isNaN(copilotNameInput.value)) {
      alert("Invalid Co-Pilot Name.");
      event.preventDefault();
    } else if (isNaN(fuelLevelInput.value)) {
       alert("Invalid Fuel Level.");
       event.preventDefault();
    } else if (isNaN(cargoMassInput.value)) {
       alert("Invalid Cargo Mass.");
       event.preventDefault();
    } else {
      allFieldsCorrect = 'true';
    } if (allFieldsCorrect === 'true') {
      document.getElementById("launchStatus").style.color = 'green',
      document.getElementById("launchStatus").innerHTML = 'Shuttle is ready for launch!'
    }
    if (fuelLevelInput.value < 10000 && allFieldsCorrect === 'true') {
       document.getElementById("launchStatus").style.color = 'red',
       document.getElementById("launchStatus").innerHTML = 'Shuttle is not ready for launch!',
       document.getElementById("fuelStatus").innerHTML = 'Not enough fuel for the journey!'
    } if (cargoMassInput.value >= 10000 && allFieldsCorrect === 'true') {
      document.getElementById("launchStatus").style.color = 'red',
      document.getElementById("launchStatus").innerHTML = 'Shuttle is not ready for launch!',
      document.getElementById("cargoStatus").innerHTML = 'Too much mass for shuttle to take off!'
    } 
    if (allFieldsCorrect === 'true') {
      document.getElementById("faultyItems").style.visibility = 'visible';
  }
 })
   
 })





// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
