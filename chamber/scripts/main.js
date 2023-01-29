const date = new Date();

// Use querySelector to obtain html element
const currentYear = document.querySelector("#year");
// insert in HTML element the year portion of date
currentYear.textContent = new Date().getFullYear();

// options for locale time format of dates
const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  
  // last modified of document
  let lastModification = new Date(document.lastModified);
  let lastModifiedId = document.querySelector("#lastmodified");
  lastModifiedId.textContent = `\xa0${lastModification.toLocaleTimeString(
    "en-US",
    options
  )}`;


// options for locale time format of dates for current Date
const currentDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  // Current Date on Load
  let mycurrentdate = new Date();
  let currentdate = document.querySelector(".currentdate");
  currentdate.textContent = `${mycurrentdate.toLocaleDateString(
    "en-UK",
    currentDateOptions
  )}`;


  // Fuction to toggle hamburger menu
function toggleMenu() {
  console.log("It Worked!");
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");

x.onclick = toggleMenu;