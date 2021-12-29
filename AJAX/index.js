
$(document).ready(function (){
    $("#btn").click(function(){
        $("#test").load();
    });
});








/*function showCountries(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET','https://dog.ceo/api/breeds/list/all',true)

    xhr.onload = function (){
        if (xhr.status == 200){
            console.log('success')
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                const countryCard = document.createElement('div')
                const countryCardImage = document.createElement('img')
                countryCard.innerHTML = country.name
                countryCardImage.src = country.flag
                countryCard.appendChild(countryCardImage)
                document.getElementById('feed').appendChild(countryCard)
            })

        }
    }

    xhr.send()
}

 */