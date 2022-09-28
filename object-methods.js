let testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
}
console.log(keys(testObject))

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  let array = []
  for(let element in obj){
    if(typeof obj[element] !== "function") array.push(obj[element])
  }
  return array
}
console.log(values(testObject))

const cb = x => {
  if(typeof x == 'string'){
      return x = x.split('').reverse().join('')
  }else{
      return x = x.toString().split('').reverse().join('')*1
  }
}

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  for(let element in obj){
    obj[element] = cb(obj[element])
  }
  return obj
}
console.log(mapObject(testObject,cb))


function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // return Object.keys(obj).map((key) => {
  //   return [key, obj[key]];
  // });
  //or
  return Object.entries(obj)
}
console.log(pairs(testObject))

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let copy = {}
  Object.keys(obj).forEach(key => {
    copy[obj[key]] = key
  })
  return copy
}
console.log(invert(testObject))


testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', email: undefined };
let defaultProps = { name: 'chinna', age: 22, location: 'Hyderabad', email: 'chinna@gmail.com'}
// use this object to test your functions
function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for(let element in obj){
    if(!obj[element]) obj[element] = defaultProps[element]
  }
  return obj
}

console.log(defaults(testObject,defaultProps))

