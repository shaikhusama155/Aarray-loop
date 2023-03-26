for (let i = 1; i, i <= 10; i++) {
    console.log(i)
}

let number = +prompt("Enter the number");
let lenght = +prompt("Enter the lenght");
for (let i = 1; i <= lenght; i++) {
    let result = number * i;
    console.log(`${number} X ${i}= ${result}`)
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
    console.log(`Element at index ${i} is ${fruits[i]}`)
}

let A = ['cake', 'applepie', 'cookie', 'chips', 'patties'];

let userInput = prompt(' Enter an items to search for !');
if (A.includes(userInput)) {
    console.log(userInput + " " + " is availible for you")
}
else {
    console.log(userInput + "is not availibe for you")
}

// let arr = [12, 65, 71, 45, 91];
// let largestNumber = arr[0];

// for (let i = 1; i < arr.lenght; i++) {
//     if (arr[i] > largestNumber) {
//         largestNumber = arr[i];
//     }
// }
// console.log("The largest number in an array is:" + largestNumber);

let arr = [24, 53, 78, 91, 12];

let largestNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}

console.log("The largest number in the array is: " + largestNumber);

let arr1 = [24, 53, 78, 91, 12];

let smallestNumber = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < smallestNumber) {
        smallestNumber = arr1[i];
    }
}

console.log("The largest number in the array is: " + smallestNumber);

let num = 5;
for (let i = 0; i <= 100; i) {
    i = i + 5;
    console.log(i);
}