showMovies()

async function showMovies() {

    try {
        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const film = data.result;

        const belowButtons = document.getElementById("belowButtons");

        let movieList = "";

        for (let i = 0; i < film.length; i++) {
            belowButtons.innerHTML+=film[i].properties.title + "<br>";
        }
    }

    catch (err) {
        console.error(err);
    }
}