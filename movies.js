showMovies()

async function showMovies() {
    
    try {
        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
      
        for (let i = 0; i < data.result.length; i++) {
            const containerDiv = createBodyContent(data.result[i]);

            document.body.appendChild(containerDiv);
        }
    }

    catch (err) {
        console.error(err);
    }
}

function createBodyContent(film) {

    const containerDiv = document.createElement("container");
    containerDiv.classList.add("container");

    const imgDiv = document.createElement("image-container");
    imgDiv.classList.add("image-container");
    var img = document.createElement("img");
    img.src = imageCheck(film.properties.title);
    imgDiv.appendChild(img);

    const link = document.createElement("a");
    link.classList.add("details-link");
    link.href = createLink(film.uid);
    link.textContent = film.properties.title;

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const titleHeader = document.createElement("h1");
    titleHeader.appendChild(link);
    
    txtDiv.appendChild(titleHeader);
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

function createLink(id) {
    const url = 'movieDetails.html?'
    const search = { id: id };
    const searchParams = new URLSearchParams(search);

    return url + searchParams.toString();
}