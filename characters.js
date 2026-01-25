var data;

showCharacters()

async function showCharacters() {

    try {
        const response = await fetch("https://www.swapi.tech/api/people");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        data = await response.json();

        /* delete this */
        //console.log(data);


        for (let i = 0; i < data.results.length; i++) {
            const containerDiv = createBodyContent(data.results[i]);

            document.body.appendChild(containerDiv);
        }
    }

    catch (err) {
        console.error(err);
    }
}

function createBodyContent(chara) {

    const containerDiv = document.createElement("container");
    containerDiv.classList.add("container");

    //const imgDiv = document.createElement("image-container");
    //imgDiv.classList.add("image-container");
    //var img = document.createElement("img");
    //img.src = imageCheck(chara.name);
    //imgDiv.appendChild(img);

    const link = document.createElement("a");
    link.classList.add("details-link");
    link.href = createLink(chara.uid);
    link.textContent = chara.name;

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const titleHeader = document.createElement("h1");
    titleHeader.appendChild(link);

    const loadDiv = document.createElement("div");
    loadDiv.classList.add("loader");

    txtDiv.appendChild(titleHeader);
    //containerDiv.appendChild(imgDiv);
    containerDiv.appendChild(txtDiv);
    containerDiv.appendChild(loadDiv);

    return containerDiv;
} 

function createLink(id) {
    const url = 'characterDetails.html?'
    const search = { id: id };
    const searchParams = new URLSearchParams(search);

    return url + searchParams.toString();
}

let isLoading = false;

function handleScroll() {
    if (isLoading) return;

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    const threshold = 200;

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
        isLoading = true;
        loadMoreContent();
    }
}

async function loadMoreContent() {
    if (data.next != null) {
        try {
            const response = await fetch(data.next);

            if (!response.ok) {
                throw new Error("Could not fetch");
            }

            data = await response.json();

            /* delete this */
            //console.log(data);

            for (let i = 0; i < data.results.length; i++) {
                const containerDiv = createBodyContent(data.results[i]);

                document.body.appendChild(containerDiv);
            }

            isLoading = false;
        }

        catch (err) {
            console.error(err);
        }
    }
}

window.addEventListener('scroll', handleScroll);
