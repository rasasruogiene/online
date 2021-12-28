function Book(isbn, name, year, pages, category){
    this.name = name;
    this.year = year;
    this.pages = pages;
    this.isbn = isbn;
    this.category = category;

    this.writeToConsole = function (){
        var year = this.year;

        if(year === "2021"){
            year = year + " (nauja knyga)";
        }
        console.log(
            'ISBN: ' + this.isbn + '\n' +
            'Leidimo metai: ' + year + '\n' +
            'Pavadinimas: ' + this.name + '\n' +
            'Puslapių skaičius: ' + this.pages + '\n');
    }
}


var books = [ new Book("ASD84542", "Haris Poteris", "1999", 500, "Negrožinė literatūra"),
    new Book("ASD84542", "Haris Poteris2", "2021", 400, "Grožinė literatūra"),
    new Book("GR1236K","Mano mintys debesyse","2018",300,"Grožinė literatūra")];
books.forEach(x => function(){

});

var books_category = books.filter(x => x.category === "Grožinė literatūra");

console.log("Grožinė literatūra (" + books_category.length + " knygų)");
books_category.forEach(x => x.writeToConsole());