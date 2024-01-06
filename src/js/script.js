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

const elList = document.getElementById("hero-list");
const elSearchBox = document.getElementById("search-box");

function createSuperheroList(superheroes) {
    superheroes.forEach((superhero) => {
        const elItem = document.createElement("li");
        elItem.textContent = `${superhero.name} by ${superhero.publisher}`;
        elList.appendChild(elItem);
    });
}

function filterSearch(e) {
    const outputList = superheroes.filter((superhero) => {
        return (
            superhero.name
                .toLowerCase()
                .includes(elSearchBox.value.toLowerCase()) ||
            superhero.publisher
                .toLowerCase()
                .includes(elSearchBox.value.toLowerCase())
        );
    });
    elList.innerHTML = "";
    createSuperheroList(outputList);
}

elSearchBox.addEventListener("keyup", filterSearch);

window.onload = createSuperheroList(
    superheroes.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })
);
