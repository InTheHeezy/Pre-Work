fetch("https://www.swapi.tech/api/people/")
    .then(res => res.json())
    .then(data => console.log())
    .catch(err => console.error(err))
