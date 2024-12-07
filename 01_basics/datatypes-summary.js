// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber = 34531645166448714758n







// Reference (Non-Primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name: "arnav",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitve), Heap (Non-Primitive)

let myYoutubename= "arnavjaindotcom"

let anothername= myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername)

let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo =userOne

userTwo.email = "arnav@google.com"

console.log(userOne.email);
console.log(userTwo.email);


