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
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");

x.onclick = toggleMenu;

// check day of the week
if (date.getDay() === 1 || date.getDay() === 2) {
  // create element for the alert
  // add the id of the element and
  // append it to the top of the element
  const joinus = document.createElement("div");
  joinus.id = "comejoinus";
  joinus.innerHTML = "<div>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m</div>";
  document.body.prepend(joinus);
  // create an element to close the alert
  const closeAlert = document.createElement("div");
  closeAlert.id = "closeAlert";
  closeAlert.innerHTML = "<i class=\"fa-solid fa-times\"></i>";
  // add event listener to close the element
  closeAlert.addEventListener("click", () => {
    joinus.remove();
  });
  // add element to the alert div
  joinus.appendChild(closeAlert);
}