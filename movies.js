showMovies()

async function showMovies() {
    
    try {
        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const film = data.result;
        console.log(film);
        const belowButtons = document.getElementById("belowButtons");


        /*
        Container Test 
        */

        const containerDiv = document.createElement("container");
        containerDiv.classList.add("container");

        const imgDiv = document.createElement("image-container");
        imgDiv.classList.add("image-container");
        var img = document.createElement("img");
        img.src = "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg";
        imgDiv.appendChild(img);

        const txtDiv = document.createElement("text-container");
        txtDiv.classList.add("text-container");
        const titleHeader = document.createElement("h1");
        titleHeader.textContent = film[0].properties.title;

        const directors = document.createElement("p");
        directors.textContent = "Director(s): " + film[0].properties.director;

        const producers = document.createElement("p");
        producers.textContent = "Producer(s): " + film[0].properties.producer;

        const release = document.createElement("p");
        release.textContent = "Release Date: " + film[0].properties.release_date;

        txtDiv.appendChild(titleHeader);
        txtDiv.appendChild(directors);
        txtDiv.appendChild(producers);
        txtDiv.appendChild(release);

        containerDiv.appendChild(imgDiv);
        containerDiv.appendChild(txtDiv);

        document.body.appendChild(containerDiv);

        /*

        let movieList = "";

        for (let i = 0; i < film.length; i++) {
            belowButtons.innerHTML += film[i].properties.title + "<br>";
        }
        */
    }

    catch (err) {
        console.error(err);
    }
}