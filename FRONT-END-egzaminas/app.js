document.getElementById('submit').onclick = function () {
    var inputValue = document.getElementById('search').value;
    document.getElementById('movies').innerHTML = '';
    getMovie(inputValue);
}

//(plakatas, trukmė, režisierius, aktoriai, IMDB reitingas)
function getMovie(movie) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var m = JSON.parse(xhttp.responseText);
            if (m.Response === "True") {
                document.getElementById('movies').innerHTML = `
                    <table class="table">
                          <tr>
                                <th scope="col" class="poster-col">Plakatas</th>
                                <th scope="col">Informacija:</th>
                          </tr>
                          <tr>
                                <td rowspan="6">            
                                    <figure>
                                        <img src="${m.Poster}">
                                    </figure>
                                </td>
                          </tr>
                          <tr>
                                <td>Pavadinimas: ${m.Title}</td>
                          </tr>
                          <tr>
                                <td>Trukmė: ${m.Runtime}</td>
                          </tr>
                          <tr>
                                <td>Režisierius: ${m.Director}</td>
                          </tr>
                          <tr>
                                <td>Aktoriai: ${m.Actors}</td>
                          </tr>
                          <tr>
                                <td>IMDB reitingas: ${m.imdbRating}</td>
                          </tr>
                    </table>
            `;

            } else {
                document.getElementById('movies').innerHTML = '<p class="error">Filmas nerastas!</p>'
            }
        }
    }
    var str = movie.replace(' ', '+');
    xhttp.open('GET', 'http://www.omdbapi.com/?apikey=e4db3ced&t=' + str, true);

    xhttp.send();
}
