document.getElementById('submit').onclick = function () {
    var inputValue = document.getElementById('search').value;
    getBreed(inputValue);
}

function getBreed(breed) {
    var xhttp = new XMLHttpRequest();
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
            document.getElementById('gallery').innerHTML = `<p class="error">ERROR<p>`;
        }
    }
    var str = breed.toLowerCase().split(' ');
    if (str.length === 1){
        xhttp.open('GET', 'https://dog.ceo/api/breed/' + breed + '/images', true);

    }
    if (str.length === 2){
        xhttp.open('GET', 'https://dog.ceo/api/breed/' + str[1] + '/' + str[0] +'/images', true);
    }
    xhttp.send();
}
