// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
  console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
  console.log("engines are preparing to start");
} else {
  console.log("engines are off");
}

if (crewStatus) {
  console.log("Crew Ready");
} else console.log("Crew Not Ready");

if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode == 400){
  console.log("Success! Computer online.");
} else{ console.log("ALERT: Computer offline!");
}



if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000){
  console.log("ALERT: Cannot maintain orbit!");
} else{ console.log("Stable speed!");
}
