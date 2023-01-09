function forLoop() {
    for (var i = 0; i < 10; i++) {
        var element1 = i;
        let element2 = i;
    }
    console.log(element1);
    console.log(element2);
    console.log(outsideFunction);

    var insideFunction = 5;
}

var outsideFunction = 4;

//console.log(insideFunction);

forLoop()


// U konzoli se pikazuje samo poslednja vrednost interacija varijable element
// Doslo je do greske, jer let varijabla ima function scope
// Vrednost varijable outsideFunction se ispisuje u konzoli nakon sto pozovemo funkciju forLoop
// Doslo je do greske, jer varijabla koja je definisana unutar funkcije ne moze se ispisati van funkcije.