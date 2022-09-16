// save current date time in a variable
const date = new Date();
// Use querySelecto to obtain html element
let currentYear = document.querySelector("#year");
// insert in HTML element the year portion of date
currentYear.textContent = date.getFullYear();


// last modified of document
let lastModification = `Last Updated: ${document.lastModified}`;
let lastModifiedId = document.querySelector("#lastmodified");
lastModifiedId.textContent = lastModification;

