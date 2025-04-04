// ---------------------- Digital Timer Logic-------------------
const hoursDisplay = $("#hoursDisplay");
const minutesDisplay = $("#minutesDisplay");
const secondsDisplay = $("#secondsDisplay");
const meridianIndicator = $("#meridianIndicator");
let timeFormat = 12;
const dayDisplay = $("#dayDisplay");
const monthDisplay = $("#monthDisplay");
const yearDisplay = $("#yearDisplay");

// Determine the time of day (Morning, Noon, Evening, Night)
const getTimeOfDay = (hours) =>
  hours < 6
    ? "Night"
    : hours < 12
    ? "Morning"
    : hours < 18
    ? "Noon"
    : "Evening";

// Get AM/PM indicator
const getMeridiem = (hours) => (hours < 12 ? "AM" : "PM");

// Convert time based on selected format
const formatHours = (hours) => (timeFormat === 12 ? hours % 12 || 12 : hours);

// Add leading zero for double-digit format
const formatTimeUnit = (unit) => String(unit).padStart(2, "0");

// Update UI elements
const updateTimerUI = (meridiem, hours, minutes, seconds) => {
  meridianIndicator.text(timeFormat === 12 ? meridiem : ""); // Hide AM/PM in 24H mode
  hoursDisplay.text(hours);
  minutesDisplay.text(minutes);
  secondsDisplay.text(seconds);
};

// Update clock logic
const updateTimer = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const meridiem = getMeridiem(hours);

  updateTimerUI(
    meridiem,
    formatTimeUnit(formatHours(hours)),
    formatTimeUnit(minutes),
    formatTimeUnit(seconds)
  );
};

const updateDayMonthYear = () => {
  const now = new Date();
  // const option={ weekday:"long", month:"long", day:"numeric", year:"numeric"}
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const monthDay = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const year = now.toLocaleDateString("en-US", { year: "numeric" });

  dayDisplay.text(weekday);
  monthDisplay.text(monthDay);
  yearDisplay.text(year);
};

// Initialize clock and update every second
updateTimer();
setInterval(updateTimer, 1000);
updateDayMonthYear();

// Handle user format switch (12H <-> 24H)
$(".hoursMode").on("click", function () {
  $(".hoursMode").removeClass("active");
  $(this).addClass("active");
  timeFormat = $(this).data("type");
  updateTimer();
});




//# ---------------------- Analog Timer Logic------------------->
const secondHand = $(".secondHand");
const minuteHand = $(".minuteHand");
const hourHand = $(".hourHand");

// # Using Rested Rotation
// # In each roation from 0deg to ndeg due to avoiding frmaes by css ootmizaio not visible
// # Used if need absolute real-time movement
$(document).ready(function () {
  const setClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotations
    const secondRotation = seconds * 6;
    const minuteRotation = minutes * 6;
    const hourRotation = (hours % 12) * 30 + minutes * 0.5;

    // ✅ Apply transformations using jQuery
    secondHand.css("transform", `rotate(${secondRotation}deg)`);
    minuteHand.css("transform", `rotate(${minuteRotation}deg)`);
    hourHand.css("transform", `rotate(${hourRotation}deg)`);
  };
  setClock();
  setInterval(setClock, 1000);

});


// # Using Accumulative Rotation
// # Used if smooth movment needs but have precision error
// $(document).ready(function () {
//   let secondRotation, minuteRotation, hourRotation;

//   function setInitialRotation() {
//     let now = new Date();
//     let seconds = now.getSeconds();
//     let minutes = now.getMinutes();
//     let hours = now.getHours();

//     secondRotation = seconds * 6;
//     // minuteRotation = minutes * 6 + seconds * 0.1;
//     minuteRotation = minutes * 6;
//     hourRotation = (hours % 12) * 30 + minutes * 0.5;

//     secondHand.css("transform", `rotate(${secondRotation}deg)`);
//     minuteHand.css("transform", `rotate(${minuteRotation}deg)`);
//     hourHand.css("transform", `rotate(${hourRotation}deg)`);
//   }

//   function updateClock() {
//     // Increment rotations smoothly
//     secondRotation += 6;
//     minuteRotation += 0.1;
//     hourRotation += 1 / 120;

//     secondHand.css("transform", `rotate(${secondRotation}deg)`);
//     minuteHand.css("transform", `rotate(${minuteRotation}deg)`);
//     hourHand.css("transform", `rotate(${hourRotation}deg)`);
//   }

//   setInitialRotation(); // Sync to live time at start
//   setInterval(updateClock, 1000); // Keep updating every second
// });





// ----------------------- Line Progress Bar =--------------------
$(".startProgress").on("click",()=>{
  $(this).addClass("active");
  console.log(this);  
});

$(".startProgress").on("click", function () {
  $(this).addClass("active");
});

