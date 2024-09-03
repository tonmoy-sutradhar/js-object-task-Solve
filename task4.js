// ### Task-4
// Count the `number of properties`.

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

console.log(student);
const properties = Object.keys(student).length;
console.log(properties);
// for (let i = 1; i <= properties.length; i++) {
//   console.log(i);
// }
