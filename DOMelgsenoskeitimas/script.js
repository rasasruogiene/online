var forma = document.querySelector('form');
var vardas = document.getElementById('vardas');
var pavarde = document.getElementById('pavarde');
var submit = document.getElementById('submit');
var pranesimas = document.querySelector('p');

forma.onsubmit = function (b){
    if(vardas.value ==='' || pavarde.value === ''){
        e.preventDefault();
        pranesimas.textContent = 'Privalote uzpildyti visus laukrlius!';

    }
}