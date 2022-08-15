// const favorites = ["Seafood"];

// const [myFood, herFood] = favorites;

// console.log(myFood);
// console.log(herFood);

/* Output:
Seafood
undefined
*/

const favorites = ["Seafood"];

const [myFood, herFood = "Salad"] = favorites;

console.log(myFood);
console.log(herFood);

/* Output:
Seafood
Salad
*/
