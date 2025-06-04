// .splice()
const fruits = ["apple", "banana", "orange", "grape", "mango"];
const numArr = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10, 11];

const thirdFruit = fruits.splice(2, 1);
// console.log(thirdFruit);

const fruitsAddWatermelon = fruits.splice(1, 0, "watermelon");
// console.log(fruits);

const replaceSecondItem = fruits.splice(1, 1, "X");
// console.log(fruits);

// .slice()
const firstThreeElements = fruits.slice(0, 3)
// console.log(firstThreeElements);

const copyElements = fruits.slice(3);
// console.log(copyElements);

function middleThreeElements(arr) {
    if (arr.length % 2 !== 0 && arr.length >= 3) {
        let evenArr = arr.length + 1;
        let middle = evenArr / 2;
        console.log(arr.slice((middle - 2), middle + 1));
        return arr.slice((middle - 2), middle + 1);
    }
}

// middleThreeElements(numArr);

// better logic... using Math.floor
function middleThreeElements2(arr) {
    if (arr.length % 2 !== 0 && arr.length >= 3) {
        let middle = Math.floor(arr.length / 2);
        console.log(arr.slice(middle - 1, middle + 2));
        return arr.slice(middle - 1, middle + 2);
    }
}

// middleThreeElements2(numArr);

// .map()
const numbers = [2, 5, 8, 13, 21];
const names = ["alice", "bob", "charlie", "anna"];
const students = [
  { name: "Sara", score: 72 },
  { name: "Mike", score: 59 },
  { name: "Luna", score: 91 },
];

const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

const upperNames = names.map(name => name.toUpperCase());
// console.log(upperNames);

const studentArr = students.map(student => `${student.name}: ${student.score}`);
// console.log(studentArr);

// .forEach()
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const logColors = colors.forEach(color => console.log(color));
// console.log(logColors);

let total = 0;
const addNumbers = numbers.forEach(num => total += num);
// console.log(total);

const isPass = students.forEach(student => student.passed = student.score >= 60);
// console.log(students);

// .reduce()
const values = [1, 2, 3, 4, 5];
const words = ["Hello", "world", "this", "is", "JavaScript"];

const totalSumValues = values.reduce((acc, num) => acc + num)
// console.log(totalSumValues);

const totalProductValues = values.reduce((acc, num) => acc * num);
// console.log(totalProductValues);

const newSentence = words.reduce((acc, word) => acc + " " + word);
// console.log(newSentence);

// .sort()
const unsortedNumbers = [34, 12, 5, 78, 2, 89];
const stringList = ["pear", "apple", "banana", "kiwi"];
const people = [
  { name: "Zoe", age: 32 },
  { name: "Liam", age: 25 },
  { name: "Emma", age: 29 },
];

const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
// console.log(sortedNumbers);

const sortedStrings = stringList.sort();
// console.log(sortedStrings);

const ageSort = people.sort((a, b) => a.age - b.age);
// console.log(ageSort);