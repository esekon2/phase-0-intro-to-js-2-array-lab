// Write your code here
const cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name); // This line is correct and modifies the original cats array.
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name); // This line is correct and modifies the original cats array.
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop(); // This line is correct and modifies the original cats array.
}

// Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift(); // This line is correct and modifies the original cats array.
}

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const catsNew = [...cats, name]; // Create a new array without modifying the original cats array.
    return catsNew;
}

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const catsNew = [name, ...cats]; // Create a new array without modifying the original cats array.
    return catsNew;
}

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const lessCats = cats.slice(0, -1); // Create a new array without modifying the original cats array.
    return lessCats;
}

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const lessCats = cats.slice(1); // Create a new array without modifying the original cats array.
    return lessCats;
}

// Testing the functions
const appendedCats = appendCat("Broom");
console.log(appendedCats);

const prependedCats = prependCat("Arnold");
console.log(prependedCats);

const catsWithLastRemoved = removeLastCat();
console.log(catsWithLastRemoved);

const catsWithFirstRemoved = removeFirstCat();
console.log(catsWithFirstRemoved);
