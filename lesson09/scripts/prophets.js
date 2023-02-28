const dataURL = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    // We reference the prophet array of the data object
    // given the structure of the json file
    // show json data in table format
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // Select the output container element
    const cards = document.querySelector("div.cards");

    prophets.forEach(prophet => {
        // Create elements to add into the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let bday = document.createElement("span");
        let placeBday = document.createElement("span");
        let age = document.createElement("span");

        // Build the h2 content out to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image out to show the prophet's portrait
        // and relevant attributes to the image element
        let cardinal = "";
        if (prophet.order === 1) {
            cardinal = "st";
        } else if (prophet.order === 2) {
            cardinal = "nd";
        } else if (prophet.order === 3) {
            cardinal = "rd";
        } else {
            cardinal = "th"
        }
        portrait.src = `${prophet.imageurl}`;
        portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order+cardinal} Latter-Day President`;
        portrait.width = "340";
        portrait.height = "440";
        portrait.setAttribute("loading", "lazy");

        // Add Birthday data
        bday.textContent = `Date of Birth: ${prophet.birthdate}`;
        // Add birth place
        placeBday.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Aging calculations
        let ageInYears = 0;
        if (prophet.death === null) {
            let currentdate = new Date();
            let prophetBday = new Date(prophet.birthdate);
            ageInYears = currentdate.getFullYear() - prophetBday.getFullYear();
        } else {
            let prophetBday = new Date(prophet.birthdate);
            let prophetDeath = new Date(prophet.death);
            ageInYears = prophetDeath.getFullYear() - prophetBday.getFullYear();
        }
        age.textContent = `Age: ${ageInYears} years old`;

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(bday);
        card.appendChild(placeBday);
        card.appendChild(age);
        card.appendChild(portrait);
        
        // Append to the div.cards element
        cards.appendChild(card);
    });
};

getProphetData();