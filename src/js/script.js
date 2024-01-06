(() => {
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

    const createTableRow = (superhero) => {
        const tableRow = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = superhero.name;
        td2.textContent = superhero.publisher;
        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        return tableRow;
    };

    const createSuperheroList = (superheroes) => {
        superheroes.forEach((superhero) => {
            const tableRow = createTableRow(superhero);
            heroTableBody.appendChild(tableRow);
        });
    };

    const filterSearch = () => {
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
    };

    searchBox.addEventListener("keyup", filterSearch);

    searchGroup.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    window.addEventListener("load", () => {
        createSuperheroList(
            superheroes.sort((a, b) => a.name.localeCompare(b.name))
        );
    });
})();
