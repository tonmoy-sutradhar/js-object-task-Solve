// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// **Output:**
//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
// console.log(keys);

for (const obj of keys) {
  console.log("key:", obj, "|", "type:", typeof myObject[obj]);
}
