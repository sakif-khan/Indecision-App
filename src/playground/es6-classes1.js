class Person {
    constructor(name = 'Anonymous', age = 0) { // things after "=" sign, default values
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // calls parent constructor
        this.major = major;
        // console.log('the major is '+this.major+' '+major);
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${ this.homeLocation }`;
        }
        return greeting;
    }
}

// const me = new Student('mochok', 21, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

const me = new Traveller('mochok', 21, 'Computer Science');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());