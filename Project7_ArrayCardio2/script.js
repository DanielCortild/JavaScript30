//////////
//People//
//////////

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Some and Every Checks
// Array.prototype.some()
// Is at least one person 19 or older?
console.log("Is at least one person 19 or older?");
console.log(people.some(p => (2020 - p.year >= 19) ));

// Array.prototype.every()
// Is everyone 19 or older?
console.log("Is everyone 19 or older?");
console.log(people.every(p => (2020 - p.year >= 19) ));

////////////
//Comments//
////////////

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
console.log("Find the comment with the ID of 823423");
console.log(comments.find(c => (c.id == 823423)).text );

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423
console.log("Delete the comment with the ID of 823423");
const index = comments.findIndex(c => (c.id == 823423));
const newComments = [...comments.splice( 0, index ), ...comments.splice(index)];
console.table(newComments);
