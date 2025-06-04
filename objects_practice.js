// Level 1
// Object Recipe
const recipe = {
    title: "Banana Bread",
    serves: 4,
    ingredients: ["banana", "flour", "egg"]
}

function printRecipe(recipe) {
    console.log(`${recipe.title}
Serves: ${recipe.serves}
Ingredients:
- ${recipe.ingredients[0]}
- ${recipe.ingredients[1]}
- ${recipe.ingredients[2]}`)
}
printRecipe(recipe);

// Add & Remove Keys
const user = {
    name: "Ai",
    age: 24
};
user.location = "Vancouver";
delete user.age;

user.greet = function() {
    console.log(`Hi, I'm ${this.name} from ${this.location}`);
}
user.greet();
console.log(user);

// Level 2
// Dynamic Greeting Method
const doggo1 = {
    name: "Cleo",
    age: "10 months",
    greet: function() {
        console.log(`${this.name}: woof woof!~`);
    }
}
const doggo2 = {
    name: "Lano",
    age: 4,
    greet: doggo1.greet
}

doggo1.greet();
doggo2.greet();

// 4 Arrow vs Regular `this`
const dog = {
  name: "Mochi",
  speak() {
    setTimeout(function () { // callback fxn declared with a fxn expression; has it's own this that is attached to the window
      console.log("1:", this.name);
    }, 1000);

    setTimeout(() => {
      console.log("2:", this.name); // arrow fxns don't have a built in "this" and instead inherits from parent
    }, 1000);
  }
};
dog.speak();

// Level 3
// 5. Build a Timer Object
const timer = {
    seconds: 0,
    intervalId: null,
    start() {
        this.intervalId = setInterval(() => {
            this.seconds++;
            console.log(`Time accumulated: ${this.seconds} seconds`);
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
    }
}
timer.start();
timer.stop();
