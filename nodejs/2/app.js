const lodash = require('lodash')

const number = [1,2,3,4,5]
const reversed = lodash.reverse(number)

console.log(reversed)

const users = [
  { id: 1, name: 'Suhas', active: true },
  { id: 2, name: 'Raj', active: false },
  { id: 3, name: 'Sneha', active: true }
];

const activeUsers = lodash.filter(users,{active:true});
console.log(activeUsers);
