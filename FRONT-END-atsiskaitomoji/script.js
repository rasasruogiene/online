document.getElementById('submit').onclick = function () {
    var inputValue = document.getElementById('search').value;
    getBreed(inputValue);
}

function getBreed(breed) {
    var xhttp = new XMLHttpRequest();
    displayLimit = 10;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var br = JSON.parse(xhttp.responseText);
            console.log(br);
            console.log(br.status);
            if (br.status === "success") {
                imageGrid = '';
                br.message.forEach(value => {
                    imageGrid += `
                        <figure>
                            <img src="${value}" class="dogs-gallery__img">
                        </figure>
                    `
                });
                document.getElementById('gallery').innerHTML = imageGrid;
            }
        }
        if (xhttp.status === 404) {
            document.getElementById('gallery').innerHTML = `<p class="error">KLAIDA<p>`;
        }
    }
    xhttp.open('GET', 'https://dog.ceo/api/breed/' + breed + '/images', true);
    xhttp.send();
}