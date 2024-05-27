const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
console.log(parent.hasOwnProperty("surname"));
console.log(parent.hasOwnProperty("heritage"));
console.log(child.hasOwnProperty("name"));
console.log(child.hasOwnProperty("age"));
console.log(child.hasOwnProperty("surname"));
console.log(parent.isPrototypeOf(child));
console.log(child.hasOwnProperty("heritage"));
console.log(child.surname);
console.log(child.heritage);
console.log(child.age);
console.log(child.name);