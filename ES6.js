//1. let and const vs. var
    //var - global or function scope (if declared inside a function). Can be updated and re-declared. Because of hoisting can be used before initialization, default value is undefined.
    var globalVariable = 3;
    globalVariable = 5;
    console.log(globalVariable);

    //let - function/block scope. Can be updated, cannot be re-declared. Can be declared without initialization. Hoisting is not supported.
    let number = 1;
    number = 7;
    console.log(number);

    //const - function/block scope. Cannot be updated or re-declared. Cannot be declared without initialization. Hoisting is not supported.
    const object = {
        age: 39,
        fullName: "Marija Nikolvoski",
    };

    //cannot change const object's properties, but we can update its values
    object.age = 40;
    console.log(object);


//2. ES6 classes vs. class functions
    //ES6 classes
    class User {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        print() {
            console.log(`${this.firstName} ${this.lastName} has an age of ${this.age} `);
        }
    }
  
    let marija = new User('Marija', 'Nikolovski', 39);
    marija.print()

    //class functions
    function User1(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.print = function () {
            console.log(`${this.firstName} ${this.lastName} has an age of ${this.age} `);
        };
    }
  
    const user = new User1('Marija', 'Nikolovski', 39);
    user.print();

//3. Arrow functions vs. ES5 functions
    let riversSerbia = {
        rivers: [
            "Danube",
            "Sava",
            "Big Morava",
        ],
        country: "Serbia",
        getFullInfo: function () {
            return this.rivers.map(function (river) {
                //this.country - undefined because ‘this’ is referring to the function that called it which doesn’t know who is the writer. Solution: bind()
                return `In ${this.country} is located ${river} river.`;
            });
        },
    };
    console.log(riversSerbia.getFullInfo());
    
    let mountainSerbia = {
        mountains: [
            "Kopaonik",
            "Zlatibor",
            "Rudnik",
        ],
        country: "Serbia",
        getFullInfo: function () {
            return this.mountains.map((mountain) => {
                //a. function doesn't have its own context; 'this' refers to the scope where the function is
                return `In ${this.country} is located ${mountain} mountain.`;
            });
        },
    };
    console.log(mountainSerbia.getFullInfo());

//4. async/await vs. Promise.then
    //Promise.then()
    var buyNewLaptop = new Promise(function (resolve, reject) {
        let savings = 2000;
        let priceOfLaptop = 1999;
        if (savings > priceOfLaptop) {
            resolve({
                brand: "Acer",
                model: "Aspire",
            });
        } else {
            reject("I don't have enough money now.");
        }
    });

    buyNewLaptop.then((value) => {
        console.log("I finally got this laptop!", JSON.stringify(value));
    });

    buyNewLaptop.catch((reason) => {
        console.log("I couldn't buy the laptop because", reason);
    });

    console.log(buyNewLaptop);

    //async/await
    const getRandomPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.floor(Math.random() * 11) >= 100
                ? resolve({ status: "success" })
                : reject(new Error("Oops! Something happened!"));
        }, 2000);
    });
    
    async function tryPromise() {
        try {
            const result = await getRandomPromise;
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    tryPromise();