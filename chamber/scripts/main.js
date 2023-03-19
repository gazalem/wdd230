const date = new Date();

// Use querySelector to obtain html element
const currentYear = document.querySelector("#year");
// insert in HTML element the year portion of date
currentYear.textContent = date.getFullYear();

// options for locale time format of dates
const dateOptions = {
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
    dateOptions
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
    joinus.innerHTML =
        "<div>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m</div>";
    document.body.prepend(joinus);
    // create an element to close the alert
    const closeAlert = document.createElement("div");
    closeAlert.id = "closeAlert";
    closeAlert.innerHTML = '<i class="fa-solid fa-times"></i>';
    // add event listener to close the element
    closeAlert.addEventListener("click", () => {
        joinus.remove();
    });
    // add element to the alert div
    joinus.appendChild(closeAlert);
}

// Must connect to API to retrieve
// weather conditions according to the
// geolocalization
    let windChillSpeed = kmhToMph(windSpeedAPI);
    let fahTemp = celsiusToFahrenheit(celciusTemp);

// This will fill the windChill
// field in the weather section
myWindChill = windChill(fahTemp, windChillSpeed);
const windChillElement = document.querySelector("#windChill");
if (windChillElement != null) {
    windChillElement.textContent = myWindChill;
    // console.log("My Wind Chill is: ", myWindChill);
}

/*
    Lazy Loading via JS
*/

// get all the images with the data-src attribute
const images = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// fist check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    // loop through each img on check status and load if necesary
    images.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    // just Load ALL the images if is not supported
    images.forEach((img) => {
        loadImages(img);
    });
}

/*
    end of lazy loading
*/

// check last visit
const lastVisitElement = document.querySelector(".lastVisit");
let lastVisit = 0;
if (!localStorage.myLastVisit) {
    localStorage.setItem("myLastVisit", date);
    localStorage.setItem("myLastVisitCounter", 0);
} else {
    let lastVisitDate = Date.parse(localStorage.myLastVisit);
    lastVisit = (date - lastVisitDate) / 84600000;
    localStorage.setItem("myLastVisitCounter", lastVisit.toFixed(0));
    localStorage.setItem("myLastVisit", date);
}
if (lastVisitElement != null) {
    lastVisitElement.textContent = `It's been ${localStorage.getItem(
        "myLastVisitCounter"
    )} days since your last visit.`;
}

/*
 *  Directory Page Fetch Data
 */
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article.mygrid");

// Event Listener Buttons
if (gridbutton != null && listbutton != null) {
    //align
    gridbutton.addEventListener("click", () => {
        display.classList.add("mygrid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("mygrid");
    });
}

// fetch data for directory
const jsonURL = "data/data.json";

async function getDirectoryData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        if (page === "index.html") {
            // new function
            displaySpotlightMembers(data.businessDirectory);
        } else if (page === "directory.html") {
            displayDirectoryData(data.businessDirectory);
        }
        else {
            console.log(page);
        }
    } else {
        console.log("Something get wrong!");
    }
}


const displayDirectoryData = (data) => {
    const cards = document.querySelector("section.cards");
    // create card structure
    data.forEach(company => {
        // create elements for directory
        const card = document.createElement("section");
        const companyName = document.createElement("h2");
        const companyLogo = document.createElement("img");
        const companySite = document.createElement("a");
        const companyPhone = document.createElement("p");
        const companyAddress = document.createElement("address");
        // build tag with data
        companyName.textContent = company.name;
        companyLogo.src = company.imageurl;
        companyLogo.alt = `${company.name} Logo`;
        companyLogo.width = 500;
        companyLogo.loading = "lazy";
        companySite.href = company.website;
        companySite.target = "_blank";
        companySite.textContent = "Website";
        companyAddress.textContent = company.address;
        companyPhone.textContent = company.phone;
        // Append Child to the parent
        card.appendChild(companyLogo);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companySite);
        // Append to the page Parent
        cards.appendChild(card);
    });
    
};

// load directory companies
getDirectoryData(jsonURL);

/*
    Home Page Spotlight
*/

const spotlight = document.querySelector(".spotlight");
const displaySpotlightMembers = (data) => {
    
    const spotData = data.filter((business) => business.level === "gold");
    console.log(spotData);
    let counter = 0;
    
    spotData.forEach(goldMembers => {
        const spotImage = document.createElement("img");
        const spotHeader = document.createElement("h2");
        const spotinfo = document.createElement("p");
        const spotLink = document.createElement("a");
        const spotPhone = document.createElement("a");
        const spotDivisor = document.createElement("hr");
        const spotCompany = document.createElement("div");
        counter += 1;
        console.log(counter)
        spotImage.src = goldMembers.imageurl;
        spotImage.alt = `${goldMembers.name} Logo`;
        spotHeader.textContent = goldMembers.name;
        spotinfo.textContent = goldMembers.address;
        spotLink.href = goldMembers.website;
        spotLink.textContent = "Website";
        spotLink.target = "_blank";
        spotPhone.href = goldMembers.phone;
        spotPhone.textContent = `${goldMembers.phone}`;
        spotPhone.target = "_blank";

        spotCompany.classList.add(`spotlight${counter}`);
        spotCompany.appendChild(spotHeader);
        spotCompany.appendChild(spotImage);
        spotCompany.appendChild(spotDivisor);
        spotinfo.appendChild(spotLink);
        spotinfo.appendChild(spotPhone);
        spotCompany.appendChild(spotinfo);

        spotlight.appendChild(spotCompany);
    });

};