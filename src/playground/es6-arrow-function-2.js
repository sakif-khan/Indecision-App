// argument objects - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    // no longer have access to "arguments" in arrow function
    // to use "arguments" we need to convert to es5
    return a+b;
};
console.log(add(5, 10, 20));


// this keyword - no longer bound
// can use "this" in child (if we use arrow function, "this" refers to the parent ES5 function)

// const user = {
//     name: "Sakif",
//     cities: ['Dhaka', 'Magura', 'Dublin'],
//     printPlacesLived: function() {
//         // console.log(this.name);
//         // console.log(this.cities);
//         const that = this;                  ******
//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in ' + city);    ******
//         });
//     }
// };

const user = {
    name: "Sakif",
    cities: ['Dhaka', 'Magura', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [12, 32, 40, 50],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((multiplicant) => multiplicant*this.multiplyBy);
    }
}

console.log(multiplier.multiply());