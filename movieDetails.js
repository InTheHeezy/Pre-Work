window.onload = function () {
    const storeData = localStorage.getItem('userData');
    if (storeData) {
        const receivedData = storeData;
        showMoviesDetails(receivedData)
        localStorage.removeItem('userData');
    }
}

async function showMoviesDetails(id) {

    try {
        const response = await fetch("https://www.swapi.tech/api/films/" + id);

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        //const film = data.result;


        //Remove 
        console.log(data);
    }

    catch (err) {
        console.error(err);
    }
}

//var itemId = "";

//document.addEventListener('movieDetails.html', (event) => {
//    const urlParams = new URLSearchParams(window.location.search);
//    const itemId = urlParams.get('itemId');

//    if (itemId) {
//        console.log(itemId);
//    }
//});

//try {
//    const response = await fetch("https://www.swapi.tech/api/films/" + itemId);

//    if (!response.ok) {
//        throw new Error("Could not fetch");
//    }

//    const data = await response.json();
//    //const film = data.result;

//    //Remove 
//    console.log(data);
//}

//catch (err) {
//    console.error(err);
//}

//console.log(itemId)