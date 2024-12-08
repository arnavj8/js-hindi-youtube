// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Arnav",
    "full name":"Arnav Jain",
    [mySym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email:"arnav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "arnav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arnav@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
