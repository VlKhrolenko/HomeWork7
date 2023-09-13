//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
//
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray); // [5, 4, 3, 2, 1]

//Вариант 1 ---------------------------------------------------
function reverseArray(arr){
    return arr.slice().reverse()
}

console.log(reverseArray([1, 2, 2, 3, 3, 6, 7, 5]))



//Вариант 2 ---------------------------------------------------

function reverseArrayV2(arr){
    let reverseArr = []
    for (let i = arr.length-1; i >= 0 ; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr
}

const arrayV2 = [1, 2, 2, 3, 3, 6, 7, 5];
const reversedArrayV2 = reverseArrayV2(arrayV2);
console.log(reversedArrayV2)




// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
//
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const uniqueValuesArray = uniqueValues(array1, array2);
// console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]



function uniqueValues(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const uniqueArray = [];
    for (let i = 0; i < combinedArray.length; i++) {
        const currentValue = combinedArray[i];
        if (uniqueArray.indexOf(currentValue) === -1) {
            uniqueArray.push(currentValue);
        }
    }
    return uniqueArray;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(arr1, arr2);
console.log(uniqueValuesArray);



// Напишіть функцію calculateAverageGrade,
// яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
//     const students = [
//     { name: "Alice", age: 20, grade: 4.5 },
//     { name: "Bob", age: 21, grade: 3.9 },
//     { name: "Charlie", age: 19, grade: 4.8 }
// ];
//
// console.log(calculateAverageGrade(students));

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(arr){
    let sumAge = 0
    for(let i = 0; i <arr.length; i++){
        sumAge += students[i].grade
    }
    return sumAge/arr.length

}

console.log(calculateAverageGrade(students))













