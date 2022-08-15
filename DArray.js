// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

/* Output:
Seafood
Salad
Nugget
Soup
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood] = favorites;

console.log(thirdFood);

/* Output:
Nugget
*/
