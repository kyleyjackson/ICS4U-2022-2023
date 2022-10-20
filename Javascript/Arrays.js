let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
/*
// join
console.log(fruits.join());
console.log(fruits.join('--'));

// push
fruits.push('Kiwi');
console.log(fruits.join());
fruits.push(['Strawberry', 'Blueberry']);
console.log(fruits.join());
fruits.push(5);
console.log(fruits.join());

console.log(JSON.stringify(fruits));

// pop
console.log(fruits.pop());
console.log(fruits.join());

// shift
console.log(fruits.shift().join());
console.log(fruits.join());
console.log(fruits.shift().join());
console.log(fruits.join());

// unshift
console.log(fruits.unshift["Potato"]);
console.log(fruits.join());

// concat
console.log(fruits.concat(["Strawberry", "Fred"]));
console.log(JSON.stringify(fruits)); */

// slice 
/*fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3);
console.log(citrus);
console.log(fruits);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3); */


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); 
console.log(fruits);