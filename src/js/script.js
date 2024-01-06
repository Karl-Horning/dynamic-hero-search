const superheroes = [
    {
        name: "Batman",
        publisher: "DC Comics",
    },
    {
        name: "Superman",
        publisher: "DC Comics",
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
    },
    {
        name: "Flash",
        publisher: "DC Comics",
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
    },
    {
        name: "Spider-Man",
        publisher: "Marvel",
    },
    {
        name: "Hulk",
        publisher: "Marvel",
    },
    {
        name: "Iron Man",
        publisher: "Marvel",
    },
    {
        name: "Captain America",
        publisher: "Marvel",
    },
    {
        name: "Captain Carter",
        publisher: "Marvel",
    },
    {
        name: "The Punisher",
        publisher: "Marvel",
    },
    {
        name: "Deadpool",
        publisher: "Marvel",
    },
    {
        name: "Gwenpool",
        publisher: "Marvel",
    },
];

const searchBox = document.getElementById("search-box");
const searchGroup = document.getElementById("search-group");
const heroTableBody = document.getElementById("hero-table-body");

function preventSubmit() {
    return false; // Returning false prevents the form from submitting
}

function createSuperheroList(superheroes) {
    superheroes.forEach((superhero) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${superhero.name}</td><td>${superhero.publisher}</td>`;
        heroTableBody.appendChild(tableRow);
    });
}

function filterSearch(e) {
    const outputList = superheroes.filter((superhero) => {
        return (
            superhero.name
                .toLowerCase()
                .includes(searchBox.value.toLowerCase()) ||
            superhero.publisher
                .toLowerCase()
                .includes(searchBox.value.toLowerCase())
        );
    });
    heroTableBody.innerHTML = "";
    createSuperheroList(outputList);
}

searchBox.addEventListener("keyup", filterSearch);

searchGroup.addEventListener("submit", (e) => {
    e.preventDefault();
});

window.onload = createSuperheroList(
    superheroes.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })
);
