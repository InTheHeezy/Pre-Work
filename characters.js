showCharacters()

async function showCharacters() {

    try {
        const response = await fetch("https://www.swapi.tech/api/people");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const chara = data.results;

        const belowButtons = document.getElementById("belowButtons");

        let movieList = "";

        for (let i = 0; i < chara.length; i++) {
            belowButtons.innerHTML += chara[i].name + "<br>";
        }
    }

    catch (err) {
        console.error(err);
    }
}