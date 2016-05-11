// My Family

/* TODO:

  Use JS to represent 4 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

// Range

function range (start, end) {
  // TODO: YOUR CODE HERE
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// Bucket of Sloths

var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];

function longestName(sloths) {
  // TODO: Your code here
}

longestName(sloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
