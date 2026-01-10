
fetchData();

async function fetchData() {

    try {
        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const film = data.result;

        console.log(film);
        //console.log(data.result.properties.name);
    }

    catch (err) {
        console.error(err);
    }

}


/*fetch("https://www.swapi.tech/api/people/1/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  */  