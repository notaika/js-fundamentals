// ========================= Object keys methods ==========================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Object.keys() -> returns an array of the name of the keys of an object (in order that the keys were assigned). Doesn't mutate object.
console.log(Object.keys(person));

// Object.values() -> returns an array of the values of keys (in order that the keys were assigned). Doesn't mutate object.
console.log(Object.values(person));

//~~~~~~~~~~~~~~~ new example ~~~~~~~~~~~~~~~
const fruits = {
    Bananas: 3,
    Oranges: 2,
    Apples: 5
}

// Object.entries() -> returns a 2D array of key-value pairs. Each `key: value` pair is contained within their own array. The whole collection of key-value pairs are also contained within another array (like a list).
console.log(Object.entries(fruits));

// In a for...of loop, since Object.entries returns a 2D array of STRUCTURED DATA (the value of key-value pairs), you can deconstruct each item in the array. 
for (let [fruit, amount] of Object.entries(fruits)) {
    console.log(`I have ${amount} ${fruit}`)
}

//~~~~~~~~~~~~~~~ new example ~~~~~~~~~~~~~~~
// NOTE: Destructuring only works when...

const users = [
  {name: "Aiwa", age: 24}, 
  {name: "Matt", age: 25}, 
]

// Destructuring also works for objects within arrays OF STRUCTURED DATA...
for (let { name, age } of users) {
  console.log(`This is ${name}. They are ${age} years old.`)
}

const fruitLists = {
  summer: ["🍓", "🍉"],
  winter: ["🍊", "🍎"]
};

// another example of destructuring... again only works because it's structured!
for (let [season, [fruit1, fruit2]] of Object.entries(fruitLists)) {
  console.log(season, fruit1, fruit2);
}

// ========================= this Keyword ==========================

// Arrow functions don't bind their own this, it lexically inherits the parent. Since no function around it to give it context, the arrow function `this` is actually refering to the window (or undefined in strict mode)
const user1 = {
  name: "Ai",
  greet: () => {
    console.log(this.name);
  }
};
user1.greet(); // returns undefined when called

// `this` works in nested functions, if using arrow functions. The arrow function is wrapped inside of a function expression.

// IMPORANT: What confused me is since `this` inherits from the parent, I thought that this would inherit from setTimeout, since it is the function its defined in and thus, would inherit from the parent setTimeout.

// However, the `this` of arrow functions is inherited LEXICALLY. Meaning, unlike `this` - who binds to wherever/whomever it's called on. Arrow function `this` inherits from the parent function it's DEFINED IN. Since setTimeout is just a function called to execute the function and not a function that was defined within the greet method, arrow function `this` looks up to the next function declaration/expression with a `this`.
const user2 = {
  name: "Ai",
  greet() {
    setTimeout(() => {
      console.log(this.name); // ✅ "Ai"
    }, 1000);
  }
};
user2.greet();

// Does not work, because the method is not defined as a property within the object
const user3 = {
    name: "Lano",
    age: 4
}
function speak() {
    console.log(`${this.name} says: Woof woof!`);
}
// user3.speak();

// This now works, even if the function is defined outside of the object, as long as that function is defined as a property to an object -> it becomes a method that can now be used by objects
const user4 = {
    name: "Cleo",
    age: "10 months",
    speak: speak
}
function speak() {
    console.log(`${this.name} says: Woof woof!`);
}

user4.speak();

// Conclusion: Essentially... a method is only a method when a function is defined as a property of an object and called through that object. And `this` only gets proper context when that when a function is called on an object to give it context. MEANING: `this` only works with proper context, when a METHOD is called on an object (not a regular standalone function).

// ========================= nested objects ==========================

// dot chaining
const human = {
  name: "Ai",
  contact: {
    email: "ai@example.com",
    phone: "555-1234"
  }
};

console.log(human.contact.email); // "ai@example.com"

// adding to a nested object
human.contact.instagram = "@aicode"; // Adds new key to nested object;

// NOTE: nested key must already be an object before you add properties to it.
human.address = {}; // Create new nested object
human.address.city = "Vancouver"; // Add key to it

console.log(human);

// You can also deconstruct nested objects, IF THEIR INFORMATION IS STRUCTURED!!
const {
    contact: { email, phone }
} = human;

// what if key had special characters, whitespaces, etc?
// CANNOT DOT CHAIN!!
const human2 = {
    name: "Tawm",
    "contact info": {
        email: "tawm@example.com",
        phone: "555-1234"
  }
};

// log phone number
console.log(human2["contact info"].phone); // 555-1234

// add another key
human2["contact info"]["work phone"] = "123-4231"; //123-4231

console.log(human2);
console.log(human2?.name);
console.log(human2["contact info"].phone);

// ~~~~~~~~~~~ ?. optional chaining operators ~~~~~~~~~~~~~~

const user5 = {
  name: "Ai",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};
// accesses the value of the key greet, not calling just retrieving
console.log(user5?.greet) 

// this one safely invokes the function
user5.greet?.(); // ✅ Works — "Hello, Ai!"

const user6 = {
  name: "Aika"
};
user6.greet?.(); // ✅ No error — greet doesn't exist, so nothing happens