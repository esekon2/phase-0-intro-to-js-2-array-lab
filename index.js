// Write your solution here!
const cats = ["Milo", "Otis", "Garfield", "Garrfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
