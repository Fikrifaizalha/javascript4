// Default Values

// Jika kita mendestruksikan objek dan menetapkan variabel dengan nama
// yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined. Contohnya:

// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, age, isMale } = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);

/* Output:
John
18
undefined
*/
// Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu
// jika tidak ditemukan. Untuk melakukanya tambahkan tanda assignment (=) setelah nama variabel
// dan tentukan nilai defaultnya seperti ini:

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, age, isMale = false } = profile;

console.log(firstName);
console.log(age);
console.log(isMale);

/* Output:
John
18
false
*/
// Dengan menambahkan default value di dalam desctructuting object jika properti tidak ditemukan,
// maka nilai default (nilai alternatif) akan diterapkan pada variabel.
