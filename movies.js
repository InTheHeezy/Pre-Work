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
        
        /*
        Container Test 
        */

        const containerDiv = createBodyContent(film[0].properties);

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

function createBodyContent(filmProperties) {

    const containerDiv = document.createElement("container");
    containerDiv.classList.add("container");

    const imgDiv = document.createElement("image-container");
    imgDiv.classList.add("image-container");
    var img = document.createElement("img");
    /* change this part */
    img.src = imageCheck(filmProperties.title);
    imgDiv.appendChild(img);

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const titleHeader = document.createElement("h1");
    titleHeader.textContent = filmProperties.title;

    const directors = document.createElement("p");
    directors.textContent = "Director(s): " + filmProperties.directors;

    const producers = document.createElement("p");
    producers.textContent = "Producer(s): " + filmProperties.producer;

    const release = document.createElement("p");
    release.textContent = "Release Date: " + filmProperties.release_date;

    txtDiv.appendChild(titleHeader);
    txtDiv.appendChild(directors);
    txtDiv.appendChild(producers);
    txtDiv.appendChild(release);

    containerDiv.appendChild(imgDiv);
    containerDiv.appendChild(txtDiv);

    return containerDiv;
}

function imageCheck(filmTitle) {
    var imgSrc = "";
    switch (filmTitle) {
        case "A New Hope":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg";
    }
    return imgSrc;
}