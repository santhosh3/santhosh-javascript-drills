
let testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham'};

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    // return Object.keys(obj).map((key) => {
    //   return [key, obj[key]];
    // });
    //or
    //return Object.entries(obj);
  }
  console.log(pairs(testObject))