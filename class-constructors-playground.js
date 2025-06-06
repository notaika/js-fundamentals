// ========================= Constructors ==========================
// Create a Book class with a constructor that sets title and author.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book1 = new Book("Mindset", "Carol Dweck");
const book2 = new Book("Atomic Habits", "James Clear");
console.log(book1, book2);

// Write a Dog class with name and breed, and a method called bark() that logs a message.
class Dog {
    constructor(name, breed) {
        this.breed = breed;
        this.name = name;
    }
    bark() {
        console.log(`${this.name} says: woof woof!`);
    }
    walk() {
        console.log(`${this.name} is walking.`);
  }
}

const dog1 = new Dog("Lano" ,"Golden Retriever");
const dog2 = new Dog("Kito", "Shihtzu Pomeranian");
dog1.bark();
dog2.bark();

// Create a Car class with make, model, and year, and a method that returns a description like “2022 Toyota Corolla”.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    description() {
        return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
}

const car1 = new Car("Toyota", "Corolla", 2022);
console.log(car1);
console.log(car1.description());

// FUN concept :)
// All objects inherit a method .toString() from Object.prototype. You can modify .toString() to create custom .toString() method that overrides the inherited... to maybe show how your object appears!

class Person {
    constructor(firstName, lastName, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }

    // Why even do this?
    // By default, .toString() used on an object retures [object Object] so that when your object is converted to a string (intentionally or automatically) -> it prints something meaningful, like a description without calling a custom method explicitly. 
    // NOTE: Probably won't ever use this due to frameworks already overriding it, but good to know.
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Spongebob", "Squarepants", "Bikini Bottom");
console.log(person1);
console.log(person1.toString());
console.log(`${person1}`);

// Questions:
// Q: Why are the methods outside of the constructor?
// A: The method is defined outside of the constructor so you don't have to recreate it everytime you instantiate a new object. Outside of the constructor, when you declare a function within the class' prototype, they are shared by all instances of that class.
    // Q: What is an instance?
    // A: An instance is just a specific copy of an object created from a class or constructor

    // Q: What do you mean by "within the class' prototype"?
    // A: When you define methods inside a class (but outside of the constructor), JS puts them on the class' prototype - this means that they are shared by all instances (not duplicated) and that each object created from the class (an instance) inherits the method via the prototype chain.

// My understanding:
// So essentially, objects created from a class are instances of that class. Class is like the big category that surrounds that object. You define a class and constructor with intent of making objects that are somewhat related in some context, thus it inherits all these methods. Classes are basically blueprints/templates for an object. Basically a broader category, and creating an object is like a subcategory of that class. Example. If you create a class "Dog", there are different kinds of dogs -> so you create the "sub-category" of dogs by breeds lets say. Within the class "Dog", you have instances of "Golden Retrievers", "Huskies", "Labradors", etc. They're all kinds of dogs, but of different breeds, sizes, ages, etc. So to apply those varying values -> you put them inside of a constructor with intent to specifically define those keys (properties) of the dog. But at the end of the day, they all bark, walk and wag their tails, so you define those outside of the constructor class, but still within the class declaration to put them onto the class' prototype. These methods are then automatically inherited by all those dogs no matter what kind of breed, size or age they are.

// Q: Okay cool, but what if the dog is so old and they can't walk anymore? (Okay that's just sad...)
// A: Since these methods are shared via prototype, they're the DEFAULT behaviour. This means that you can override that method for just one specific dog without affecting others. It's just like us modifying .toString()! Look at the example below.

const dog3 = new Dog("Luna", "Husky");
const dog4 = new Dog("Maxx", "Doberman");

dog1.walk();
dog2.walk();
dog3.walk();

// 😢 Max can’t walk anymore...
dog4.walk = function () {
   console.log(`${this.name} can no longer walk. 😢`);
};

dog4.walk(); // Buddy can no longer walk. 😢

// After writing that code above and asking about that information, I realize this is probably useful in games! Maybe like a 2D game or text based - maybe they get stunned for 3 seconds or a power-up wears off after 10 seconds! You can track internal state by adding a boolean value that flips on/off depending on how long wth setTimeout/setInterval.


class Player {
  constructor(name) {
    this.name = name;
    this.canMove = true;
  }

  move() {
    if (this.canMove) {
      console.log(`${this.name} moves forward. 🚶`);
    } else {
      console.log(`${this.name} is stunned and can't move. 🌀`);
    }
  }

  // Player gets stunned for a certain duration
  stun(duration) {
    this.canMove = false;
    console.log(`${this.name} got hit and is stunned! 💥`);

    setTimeout(() => {
      this.canMove = true;
      console.log(`${this.name} has recovered and can move again. ✅`);
    }, duration);
  }
}

const player = new Player("Hero");

// Simulate game events
player.move();           // ✅ Hero moves forward
player.stun(3000);       // 💥 Hero is stunned

setTimeout(() => {
  player.move();         // ❌ Hero is stunned and can't move (1 sec later)
}, 1000);

setTimeout(() => {
  player.move();         // ✅ Hero can move again (after 4 seconds)
}, 4000);
