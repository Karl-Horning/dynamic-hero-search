(() => {
    /**
     * Superheroes data array.
     * @type {Array<{name: string, publisher: string}>}
     */
    const superheroes = [
        { name: "Batman", publisher: "DC Comics" },
        { name: "Superman", publisher: "DC Comics" },
        { name: "Wonder Woman", publisher: "DC Comics" },
        { name: "Flash", publisher: "DC Comics" },
        { name: "Green Lantern", publisher: "DC Comics" },
        { name: "Spider-Man", publisher: "Marvel" },
        { name: "Hulk", publisher: "Marvel" },
        { name: "Iron Man", publisher: "Marvel" },
        { name: "Captain America", publisher: "Marvel" },
        { name: "Thor", publisher: "Marvel" },
        { name: "Black Widow", publisher: "Marvel" },
        { name: "Black Panther", publisher: "Marvel" },
        { name: "Doctor Strange", publisher: "Marvel" },
        { name: "Ant-Man", publisher: "Marvel" },
        { name: "Wolverine", publisher: "Marvel" },
        { name: "Deadpool", publisher: "Marvel" },
        { name: "Gwenpool", publisher: "Marvel" },
        { name: "Captain Marvel", publisher: "Marvel" },
        { name: "Daredevil", publisher: "Marvel" },
        { name: "Luke Cage", publisher: "Marvel" },
        { name: "Iron Fist", publisher: "Marvel" },
        { name: "Jessica Jones", publisher: "Marvel" },
        { name: "Hawkeye", publisher: "Marvel" },
        { name: "Scarlet Witch", publisher: "Marvel" },
        { name: "Vision", publisher: "Marvel" },
        { name: "Falcon", publisher: "Marvel" },
        { name: "Winter Soldier", publisher: "Marvel" },
        { name: "War Machine", publisher: "Marvel" },
        { name: "Shazam", publisher: "DC Comics" },
        { name: "Aquaman", publisher: "DC Comics" },
        { name: "Green Arrow", publisher: "DC Comics" },
        { name: "Flash (Wally West)", publisher: "DC Comics" },
        { name: "Nightwing", publisher: "DC Comics" },
        { name: "Batwoman", publisher: "DC Comics" },
        { name: "Supergirl", publisher: "DC Comics" },
        { name: "Martian Manhunter", publisher: "DC Comics" },
        { name: "Hawkgirl", publisher: "DC Comics" },
        { name: "Green Lantern (Hal Jordan)", publisher: "DC Comics" },
        { name: "Black Canary", publisher: "DC Comics" },
        { name: "Zatanna", publisher: "DC Comics" },
        { name: "Red Hood", publisher: "DC Comics" },
        { name: "The Atom", publisher: "DC Comics" },
        { name: "Cyborg", publisher: "DC Comics" },
        { name: "Starfire", publisher: "DC Comics" },
        { name: "Raven", publisher: "DC Comics" },
        { name: "Beast Boy", publisher: "DC Comics" },
        { name: "Swamp Thing", publisher: "DC Comics" },
        { name: "Constantine", publisher: "DC Comics" },
        { name: "Booster Gold", publisher: "DC Comics" },
        { name: "Blue Beetle", publisher: "DC Comics" },
        { name: "Huntress", publisher: "DC Comics" },
        { name: "The Question", publisher: "DC Comics" },
        { name: "Catwoman", publisher: "DC Comics" },
        { name: "Poison Ivy", publisher: "DC Comics" },
        { name: "Harley Quinn", publisher: "DC Comics" },
        { name: "Red Robin", publisher: "DC Comics" },
        { name: "Batgirl", publisher: "DC Comics" },
        { name: "Azrael", publisher: "DC Comics" },
        { name: "Bluebird", publisher: "DC Comics" },
        { name: "Batwing", publisher: "DC Comics" },
        { name: "The Riddler", publisher: "DC Comics" },
        { name: "Two-Face", publisher: "DC Comics" },
        { name: "The Penguin", publisher: "DC Comics" },
        { name: "Catman", publisher: "DC Comics" },
        { name: "Deadshot", publisher: "DC Comics" },
        { name: "Deathstroke", publisher: "DC Comics" },
        { name: "Ragman", publisher: "DC Comics" },
        { name: "The Spectre", publisher: "DC Comics" },
        { name: "Etrigan the Demon", publisher: "DC Comics" },
        { name: "Black Adam", publisher: "DC Comics" },
        { name: "Boomerang", publisher: "DC Comics" },
        { name: "Harvey Bullock", publisher: "DC Comics" },
        { name: "Commissioner Gordon", publisher: "DC Comics" },
        { name: "Bat-Mite", publisher: "DC Comics" },
        { name: "Mister Miracle", publisher: "DC Comics" },
        { name: "Big Barda", publisher: "DC Comics" },
        { name: "Hawkman", publisher: "DC Comics" },
        { name: "Hawkgirl", publisher: "DC Comics" },
        { name: "Firestorm", publisher: "DC Comics" },
        { name: "Blue Devil", publisher: "DC Comics" },
        { name: "Supernova", publisher: "DC Comics" },
        { name: "Animal Man", publisher: "DC Comics" },
        { name: "Geo-Force", publisher: "DC Comics" },
        { name: "Katana", publisher: "DC Comics" },
        { name: "Vibe", publisher: "DC Comics" },
        { name: "Doctor Fate", publisher: "DC Comics" },
        { name: "Zatara", publisher: "DC Comics" },
        { name: "Black Lightning", publisher: "DC Comics" },
        { name: "Thunder", publisher: "DC Comics" },
        { name: "Lightning", publisher: "DC Comics" },
        { name: "Crimson Fox", publisher: "DC Comics" },
        { name: "Power Girl", publisher: "DC Comics" },
        { name: "Huntress", publisher: "DC Comics" },
        { name: "The Question", publisher: "DC Comics" },
        { name: "Wildcat", publisher: "DC Comics" },
        { name: "Doctor Mid-Nite", publisher: "DC Comics" },
        { name: "Hourman", publisher: "DC Comics" },
        { name: "Stargirl", publisher: "DC Comics" },
        { name: "S.T.R.I.P.E.", publisher: "DC Comics" },
        { name: "Obsidian", publisher: "DC Comics" },
    ];

    let resultsLen = superheroes.length;
    const searchBox = document.getElementById("search-box");
    const resultsNum = document.getElementById("results-num");
    const clearButton = document.getElementById("clear-button");
    const searchGroup = document.getElementById("search-group");
    const copyrightInfo = document.getElementById("copyright-info");
    const heroTableBody = document.getElementById("hero-table-body");

    /**
     * Updates the displayed number of search results.
     * @param {number} resultsLen - The number of search results.
     */
    const updateResults = (resultsLen) => {
        resultsNum.innerText = resultsLen;
    };

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
        if (superheroes.length === 0) {
            superheroes = [
                {
                    name: "No hero found",
                    publisher: "No publisher found",
                },
            ];
            updateResults(0);
        } else {
            updateResults(superheroes.length);
        }

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
    clearButton.addEventListener("click", () => {
        clearSearchBox();
        searchBox.focus();
    });

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
        updateResults(resultsLen);
    });
})();
