const fruits = ["apple","banana" , "cherry"];
const numbers=[1,2,3,4,5];
const hasApple = fruits.includes("apple");
const allNumbersGreaterThanZero = numbers.every(num => num > 0);
const someNumbersGreaterThanThree = numbers.some(num => num > 3);
console.log("Has Apple:", hasApple);
console.log("All Numbers Greater Than Zero:", allNumbersGreaterThanZero);
console.log("Some Numbers Greater Than Three:", someNumbersGreaterThanThree);


const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log("Sorted People by Age:", people);


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);


const length = 5;
const newArray = Array.from({ length }, (_, i) => i + 1);
console.log("New Array with Length:", newArray);


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const deduplicatedArray = [...new Set(arrayWithDuplicates)];
console.log("Deduplicated Array:", deduplicatedArray);

//intersection of two arrays
function getIntersection(arr1, arr2) {
    
    return arr1.filter(element => arr2.includes(element));
}


const arrays1 = [1, 2, 3, 4, 5];
const arrays2 = [3, 4, 5, 6, 7];

const intersection = getIntersection(arrays1, arrays2);
console.log(intersection); 

//diff between 2 arrays

function getDifference(arr1, arr2) {
   
    return arr1.filter(element => !arr2.includes(element));
}
const arrayss1 = [1, 2, 3, 4, 5];
const arrayss2 = [3, 4, 5, 6, 7];

const difference = getDifference(arrayss1, arrayss2);
console.log(difference); 