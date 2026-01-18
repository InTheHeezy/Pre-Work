showMovieDetails()

async function showMovieDetails() {

    const url = window.location.href;

    const id = new URL(url).searchParams;

    const entries = new URLSearchParams(id).entries();

    const array = Array.from(entries);

    console.log(array[0][1]);

    //try {
    //    const response = await fetch("https://www.swapi.tech/api/films/");

    //    if (!response.ok) {
    //        throw new Error("Could not fetch");
    //    }

    //    const data = await response.json();
        
    //}

    //catch (err) {
    //    console.error(err);
    //}
}