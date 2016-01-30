/**
  * Promises are used for deferred and asynchronous computations.
  * A Promise represents an operation that hasn't completed yet, but is expected in the future.
  */

var foo = new Promise(function (resolve, reject) {
  //Check if the current timestamp is an even number and resolve
  if (Date.now() % 2 === 0) {
    //Pass a status code of 200 to the success callback function
    resolve(200);
  } else {
    //Pass a status code of 404 to the failure callback function
    reject(404);
  }
});

//When the promise has successfully resolved, execute the following
//callback function
foo.then(function (status) {
  console.log("Successfully resolved: " + status);
});

//When the promise is rejected i.e. an error, execute the following
//callback function
foo.catch(function (status) {
  console.log("An error occurred: " + status);
});
