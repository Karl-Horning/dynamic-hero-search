(() => {
    /**
     * Superheroes data array.
     * @type {Array<{name: string, publisher: string}>}
     */
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
    const clearButton = document.getElementById("clear-button");
    const searchGroup = document.getElementById("search-group");
    const copyrightInfo = document.getElementById("copyright-info");
    const heroTableBody = document.getElementById("hero-table-body");

    /**
     * Clears the search box and updates the hero table.
     */
    const clearSearchBox = () => {
        searchBox.value = "";
        heroTableBody.innerHTML = "";
        createSortedSuperheroList();
    };

    /**
     * Creates a table row for a superhero.
     * @param {Object} superhero - Superhero object.
     * @param {string} superhero.name - Superhero name.
     * @param {string} superhero.publisher - Superhero publisher.
     * @returns {HTMLTableRowElement} - Table row element.
     */
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

    /**
     * Creates a list of superheroes in the hero table.
     * @param {Array} superheroes - Array of superhero objects.
     */
    const createSuperheroList = (superheroes) => {
        superheroes =
            superheroes.length > 0
                ? superheroes
                : [{ name: "No hero found", publisher: "No publisher found" }];

        superheroes.forEach((superhero) => {
            const tableRow = createTableRow(superhero);
            heroTableBody.appendChild(tableRow);
        });
    };

    /**
     * Creates an alphabetically sorted list of superheroes and updates the hero table.
     */
    const createSortedSuperheroList = () =>
        createSuperheroList(
            superheroes.sort((a, b) => a.name.localeCompare(b.name))
        );

    /**
     * Filters the superhero list based on the search input.
     */
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

    /**
     * Sets the copyright information based on the current year.
     */
    const getCopyrightInfo = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (currentYear > 2023) {
            copyrightInfo.innerHTML = `&copy; 2023 - ${currentYear} Karl Horning`;
        }
    };

    // Event listeners

    /**
     * Clears the search box and updates the hero table on button click.
     */
    clearButton.addEventListener("click", clearSearchBox);

    /**
     * Filters the superhero list and updates the hero table on search input.
     */
    searchBox.addEventListener("keyup", filterSearch);

    /**
     * Prevents the default form submission and handles search on submit.
     */
    searchGroup.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    /**
     * Initializes the page by creating a sorted superhero list and setting copyright info.
     */
    window.addEventListener("load", () => {
        searchBox.focus();
        createSortedSuperheroList();
        getCopyrightInfo();
    });
})();
