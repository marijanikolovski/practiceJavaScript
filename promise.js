//Promise
const funPromise = new Promise((resolve, reject) => {
  if (Math.ceil(Math.random() * 10) > 5) {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  } else {
    reject("Error!");
  }
});

funPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Promise.all()
Promise.all([funPromise, getRandomPromise])
  .then(([resultOne, resultTwo]) => {
    console.log("result one:", resultOne);
    console.log("result two:", resultTwo);
  })
  .catch((error) => {
    console.log(error);
  });
