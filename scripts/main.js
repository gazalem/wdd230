// Use querySelector to obtain html element
const currentYear = document.querySelector("#year");
// insert in HTML element the year portion of date
currentYear.textContent = new Date().getFullYear();

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
