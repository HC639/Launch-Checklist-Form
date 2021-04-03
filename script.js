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
window.addEventListener("load", function(){
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event){
      event.preventDefault();
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      // if ( isNaN(fuelLevel.value) ||  isNaN(cargoMass.value) ) {
      //    alert("Input the number!");
      // }

      if( cargoMass.value === "" || fuelLevel.value ==="" || pilotName.value ==="" ||copilotName.value ==="" ){
         alert("All fields are required!");
      }else if( !isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
         alert("Make sure to enter valid information for each field!");
      }else{
     // update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
   let input = document.getElementById("faultyItems");
   input.style.visibility = "visible";

   let pilotStatus = document.getElementById("pilotStatus");
   pilotStatus.innerHTML = `${pilotName.value} is ready`;

   let copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML = `${copilotName.value} is ready`;

   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   if ( fuelLevel.value < 10000 ){
      fuelStatus.innerHTML = "There is not enough fuel for the journey";
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   } 
   if(cargoMass.value >= 10000 ){
      cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle not ready for launchh";
      launchStatus.style.color = "red";
   }
   if (fuelLevel.value >= 10000 && cargoMass.value < 10000){
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
      fuelStatus.innerHTML = "There is enough fuel for the journey";
      cargoStatus.innerHTML = "There is perfect mass for the shuttle to take off";
   }

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
           console.log(json);
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">`
        });
    });
   }
   });
});