// save current date time in a variable
const date = new Date();
// Use querySelecto to obtain html element
let currentYear = document.querySelector("#year");
// insert in HTML element the year portion of date
currentYear.textContent = date.getFullYear();

// options for locale time format of dates
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
// last modified of document
let lastModification = new Date(document.lastModified);
let lastModifiedId = document.querySelector("#lastmodified");
lastModifiedId.textContent = `Last Updated: ${lastModification.toLocaleTimeString(
  "en-US",
  options
)}`;
