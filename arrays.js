//Create an array of colours

let colors = ["blue", "green", "yellow"];

//Loop through the array using the for loop and log the colour to the console

for (let color of colors) {
  console.log(color);
}

//Loop through the array using the forEach loop and log the colour to the console

colors.forEach((element) => {
  console.log(element);
});

//Write a function that will rotate an array to the right by a certain number of "steps"

function rotate(steps, arr) {
  for (let i = 0; i < steps; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}

console.log(rotate(3, [1, 2, 3, 4, 5]));

//Write a function that uses the native Array .reduce method to sum up an array of numbers, but starting at 50.

let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log([1, 2, 3, 4, 5].reduce(reducer, 50));

//Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

/*function zooInventory(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0] + " the " + arr[i][1][0] + " is " + arr[i][1][1]);
  }
}

  zooInventory(myZoo);*/

  var myZoo = [
	["King Kong", ["gorilla", 42]],
	["Nemo", ["fish", 5]],
	["Punxsutawney Phil", ["groundhog", 11]],
];

function zooInventory(arr) {
	let array = arr.map((el) => {
		const animal = el.flat(2);
    animal.splice(1, 0, "the")
		animal.splice(3, 0, "is");
		return animal.join(" ");
	});
	return(array);
}

console.log(zooInventory(myZoo))

