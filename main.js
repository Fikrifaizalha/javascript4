// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// const admin = {
//   name: "Jane",
//   position: "Marketing",
// };

// const message = "Dear, " + user.firstName + " " + user.lastName + "\n\n" + "Selamat ulang tahun yang ke-" + user.age + " semoga selalu diberikan kesehatan." + "\n\n" + "Best Regards,\n" + admin.name + "\n" + admin.position;

// console.log(message);

// ${expression}

// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// console.log(`Nama: ${user.firstName} ${user.lastName}, Umur: ${user.age}`);

const user = {
  firstName: "Dimas",
  lastName: "Saputra",
  age: 18,
};

const admin = {
  name: "Jane",
  position: "Marketing",
};

const message = `Dear, ${user.firstName} ${user.lastName}
 
Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.
 
Best Regards,
${admin.name}
${admin.position}`;

console.log(message);
