showMovies()

async function showMovies() {
    
    try {
        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const film = data.result;

        for (let i = 0; i < film.length; i++) {
            const containerDiv = createBodyContent(film[i].properties);

            document.body.appendChild(containerDiv);
        }
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
    img.src = imageCheck(filmProperties.title);
    imgDiv.appendChild(img);

    const link = document.createElement("a");
    link.href = 'movieDetails.html';
    link.textContent = filmProperties.title;

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const titleHeader = document.createElement("h1");
    titleHeader.appendChild(link);
    
    const directors = document.createElement("p");
    directors.textContent = "Director: " + filmProperties.director;

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
            break;
        case "The Empire Strikes Back":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg";
            break;
        case "Return of the Jedi":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg";
            break;
        case "The Phantom Menace":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg";
            break;
        case "Attack of the Clones":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg";
            break;
        case "Revenge of the Sith":
            imgSrc = "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg";
            break;
    }
    return imgSrc;
}