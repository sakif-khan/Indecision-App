var nameVar = 'Sakif Khan';
var nameVar = 'AbirAzad';
console.log('nameVar', nameVar);

let nameLet = 'Jan';
// can reassign, but can't redefine
// let nameLet = 'Julie';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// can't reassign, neither redesign
// nameConst = 'Gunther';
// const nameConst = 'Gunther';
console.log('nameConst', nameConst);

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }
// getPetName();
// console.log(petName);

// Block Scoping (unaccessible from outside scope)
// for both let and const

const fullName = 'the woah army';

let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);