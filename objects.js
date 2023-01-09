//Create a JS person object which contains firstName, lastName and age.

let person = {
    firstName: 'Marija',
    lastname: 'Nikolovski',
    age: 39
}

//Create that same object but in JSON format

let personJSON = '{ "firstName" : "Marija", "lastName" : "Nikolovski", "age" : 39}';

//Use JSON.parse to convert the second object to a JS object 

console.log(JSON.parse(personJSON));

//Use JSON.stringify to convert the first object to a JSON object 

console.log(JSON.stringify(person));

//Create a JS array of numbers

let arrayNumbers = [1, 2, 3, 4, 5, 6];

//Create a JSON array of numbers

let arrJSONNumbers = '[1, 2, 3, 4, 5]';

//Convert the second array to a JS array and loop over it

for(var el of JSON.parse(arrJSONNumbers)) {
    console.log(el)
}