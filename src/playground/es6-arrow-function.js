// function square(x) {
//     return x*x;
// };
// console.log(square(3));

// const squareArrow = (x) => {
//     return x*x;
// };
// const squareArrow = (x) => x*x;
// console.log(squareArrow(11));


const fullName = "Faisal Arafat Fahim";
const getFirstName = (name) => {
    return name.split(' ')[0];
};
// const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName(fullName));