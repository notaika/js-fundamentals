// ========================= static Keyword ==========================

// static keyword in JS defines methods or properties that belongs to the CLASS itself, not to instances created from the class; don't need the keyword new to access a static method.
// - good to store a bunch of helper functions that belong to once class:

// Examples + Practice
// Create a MathHelper class that doubles, squares an cubes numbers

class MathHelper {
  static double(num) {
    return num * 2;
  }
  static square(num) {
    return num ** 2;
  }
  static cube(num) {
    return num ** 3;
  }
}

console.log(MathHelper.double(2)); // 4
console.log(MathHelper.square(3)); // 9
console.log(MathHelper.cube(5)); // 125

// Create a StringHelper class utility that checks if empty, capitalizes and reverses strings

class StringHelper {
  static isEmpty(str) {
    return str.length === 0;
  }
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static reverse(str) {
    return [...str].reverse().join("");
  }
}

console.log(StringHelper.isEmpty("")); // true
console.log(StringHelper.isEmpty("abcd")); // false
console.log(StringHelper.capitalize("get out")); // GET OUT
console.log(StringHelper.reverse("Hello World!")); // !dlroW olleH

// Create an ArrayHelper class with helper tools like: return first array element, last element, checks if array is empty and returns a new array with only unique elements

class ArrayHelper {
  static first(arr) {
    return arr[0];
  }
  static last(arr) {
    return arr[arr.length - 1];
  }
  static isEmpty(arr) {
    return arr.length === 0;
  }
  static unique(arr) {
    return arr.filter((elem, index) => arr.indexOf(elem) === index);
  }
}

console.log(ArrayHelper.first([1, 2, 2, 3]));
console.log(ArrayHelper.last([1, 2, 2, 3]));
console.log(ArrayHelper.isEmpty([1, 2, 2, 3]));
console.log(ArrayHelper.unique([1, 2, 2, 3]));

// Practice by myself. Use case of a class could be use a collection of validators
class Validator {
  static isValidName(str) {
    // return true if name only contains valid characters (lower+uppercase LETTERS and a space)
    return /^[a-zA-Z ]+$/.test(str);
  }
  static isValidNumber(num) {
    // return true if name only contains valid characters (NUMBERS, space and hyphen & length no greater than 12 (if using - and white space))
    return num.length >= 12 && /^[0-9\- ]+$/.test(num);
  }
  static isValidEmail(email) {
    // return true only if the characters before "@" (email name) don't include @, spaces; includes @; chars after "@" does not include spaces or @ (domain); make sure there's a dot "."; and after the dot, suffix cannot include white spaces or @.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  static isValidPassword(pass) {
    // password length is less than 8 characters? return false.
    if (pass.length < 8) return false;

    // return true if pass length >= 8 at least has 1 capital leter, and a special character
    return /[A-Z]/.test(pass) && /[^a-zA-Z0-9\s]/.test(pass);
  }
}

console.log("=== Testing isValidName() ===");
console.log(Validator.isValidName("Ai")); // true
console.log(Validator.isValidName("John Doe")); // true
console.log(Validator.isValidName("Marie-Claire")); // false (hyphen not allowed)
console.log(Validator.isValidName("12345")); // false
console.log(Validator.isValidName("Ai123")); // false
console.log(Validator.isValidName("Ai!")); // false
console.log(Validator.isValidName("")); // false

console.log("=== Testing isValidNumber() ===");
console.log(Validator.isValidNumber("123")); // true
console.log(Validator.isValidNumber("123-456")); // true
console.log(Validator.isValidNumber("123 456")); // true
console.log(Validator.isValidNumber("123 - 456")); // true
console.log(Validator.isValidNumber("123.456")); // false (dot not allowed)
console.log(Validator.isValidNumber("abc")); // false
console.log(Validator.isValidNumber("123@")); // false

console.log("=== Testing isValidEmail() ===");
console.log(Validator.isValidEmail("ai@example.com")); // true
console.log(Validator.isValidEmail("ai123@mail.co")); // true
console.log(Validator.isValidEmail("noatsymbol.com")); // false
console.log(Validator.isValidEmail("@domain.com")); // false
console.log(Validator.isValidEmail("test@")); // false
console.log(Validator.isValidEmail("")); // false

console.log("=== Testing isValidPassword() ===");
console.log(Validator.isValidPassword("A!234567")); // true
console.log(Validator.isValidPassword("abc123!@")); // false (no capital)
console.log(Validator.isValidPassword("ABC123!!")); // true
console.log(Validator.isValidPassword("abcdefg!")); // false (no capital)
console.log(Validator.isValidPassword("ABCDEFGH")); // false (no special character)
console.log(Validator.isValidPassword("Ab1!")); // false (too short)
console.log(Validator.isValidPassword("Abcdefgh!")); // true

// Example all together
// This creates a class "User" that keeps track of the number of objects (user) made.
class User {
  static userCount = 0;
  static onlineUsers = 0;

  // once a new object is constructed, it adds to userCount, logging the total count of users created from this class.
  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`Total number of users: ${User.userCount}`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}.`);
  }
}

const user1 = new User("Aiwa");
const user2 = new User("Lano");
const user3 = new User("Cleo");
User.getUserCount();

/*
Reflection:
Creating classes is probably a good way to store reusable code/utility functions for other projects like validation, math utils, equations, etc.
*/

// ========================= extend and super Keywords ==========================

// extend - on child; allows a class to inherit properties from another class
// super - on child; used inside subclass to call either a parent's constructor or method
// these keywords are used to implement inheritance between classes

// Thought about a good way to use it maybe... like entities in a video game?
class PlayerClass {
    constructor(playerName, level, maxHealth) {
        this.playerName = playerName;
        this.level = level;
        this.maxHealth = maxHealth;
    }
    move() {
        console.log(`${this.playerName} is moving.`);
    }
    static classTypes() {
        console.log(`Choose your adventurer: Warrior, Mage or Archer`);
    }
}

class Warrior extends PlayerClass {
    constructor(playerName, level, maxHealth) {
        super(playerName, level, maxHealth);
    }
    attack() {
        console.log(`${this.playerName} swings his sword.`);
    }
}

class Mage extends PlayerClass {
    constructor(playerName, level, maxHealth, maxMana) {
        super(playerName, level, maxHealth);
        this.maxMana = maxMana;
    }
    attack() {
        console.log(`${this.playerName} conjures a wall of fire.`);
    }
}

class Archer extends PlayerClass {
    constructor(playerName, level, maxHealth, maxStamina) {
        super(playerName, level, maxHealth);
        this.maxStamina = maxStamina;
    }
    attack() {
        console.log(`${this.playerName} shoots poison arrows`);
    }
}

const player1 = new Warrior("Hero", 1, 200);
const player2 = new Mage("Wizard", 15, 100, 300);
const player3 = new Archer("Arrow", 8, 125, 200);

PlayerClass.classTypes();
console.log("=========");
player1.move();
player2.move();
player3.move();
console.log("=========");
player1.attack();
player2.attack();
player3.attack();