// // Create Person class


// class Person {
//     constructor(name,pets,residence,hobbies) {
//         this.name = name;
//         this.pets = pets;
//         this.residence = residence;
//         this.hobbies = hobbies;
//     }

//     info () {

//     }

//     soundOff() {

//     }

//     addHobby(hobby) {
//         this.hobbies.push(hobby);
//     }

//     removeHobby(hobby) {
//        this.hobbies.splice(hobby, 1);
//     }

//     greeting() {
//         console.log("Hello fellow person!");
//     }
// }




// //Create Coder subclass

// class Coder extends Person {
//     constructor(name,pets,residence,hobbies) {
//         super(name,pets,residence,hobbies);
//         this.occupation = "Full Stack Web Developer";
//     }

//     greeting() {
//         console.log("I am a coder");
//     }
// }

// let megan = new Person("Megan",2,"New Orleans",["running","jumping"]);

// let adam = new Coder("Adam",3,"SanFran",["coloring","coding"]);

// adam.greeting();
// adam.addHobby("crying");
// adam.removeHobby("coloring");

// console.log(adam);

// Create Calculator class

class Calculator {
    constructor(result = 0) {
        this.result = result;
    }

    add(x=this.result,y) {
        this.result = x+y;
        return this.result;
    }

    subtract(x=this.result,y) {
        this.result = x-y;
        return this.result;
    }
    
    multiply(x=this.result,y) {
        this.result = x*y;
        return this.result;
    }

    divide(x=this.result,y) {
        this.result =  x/y;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}

let calc = new Calculator();

// console.log(calc.add(1,2));
console.log(calc.multiply(1,2));
console.log(calc.subtract(1,2));
console.log(calc.divide(1,2));

console.log(calc);







