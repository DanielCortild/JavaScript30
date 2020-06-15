const dogs = [
  {name: 'Snickers', age: 2},
  {name: 'hugo', age: 8}];

const p = document.querySelector('p');

console.log("First Log");
console.log("Another %s", "Log");
console.log("%cA big Log", "font-size: 50px; color: yellow;");

console.warn("Warning Log");
console.error("Error Log");
console.info("Info Log");

console.assert(1 === 1, "Shows if the condition is WRONG");
console.assert(1 === 2, "This will thus show");

//console.clear();

console.log(p);
console.dir(p);

dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`He is ${dog.age} years old.`);
  console.log(`That is ${dog.age * 7} dog years!`);
  console.groupEnd(`${dog.name}`);

  console.groupCollapsed(`${dog.name}2`);
  console.log(`This is ${dog.name}.`);
  console.log(`He is ${dog.age} years old.`);
  console.log(`That is ${dog.age * 7} dog years!`);
  console.groupEnd(`${dog.name}2`);
});

console.count('Test');
console.count('Test');
console.count('Test');
console.count('Test');
console.count('Test');

console.time('Fetching Imaginary Data');
console.timeEnd('Fetching Imaginary Data');

console.table(dogs)
