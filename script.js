//Refactor below code using ES2015 enhancements

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//Computed property names

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}


//Object Methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }


const instructor2 = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
}

//Create animal function 

function animal(species, vocal, sound){
    return {
        species,
        [vocal]() {
            return sound; 
        }
}}

let dog = animal('dog', 'bark', 'woof');
let sheep = animal('sheep', 'bleet', 'baaaaah')