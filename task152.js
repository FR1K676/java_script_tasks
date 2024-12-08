const numbers = [3, 5, 8, 0, 12, 7];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        break;
    }
    console.log(numbers[i]);
}

const numbers2 = [4, 7, 2, -5, 9, 1];
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] < 0) break;
    sum += numbers2[i];
}
console.log(sum);


const numbers3 = [5, 1, 6, 3, 9, 3, 7];
let position = -1;
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] === 3) {
        position = i;
        break;
    }
}
console.log(position);


let total = 0, count = 0;
while (total <= 100) {
    count++;
    total += count;
}
console.log(count);

let result1 = '';
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        result1 += i;
    }
}
console.log(result1);

let result2 = '';
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        result2 += `${i}${j} `;
    }
}
console.log(result2.trim());

const arr1 = [];
for (let i = 1; i <= 10; i++) {
    arr1.push(i);
}
console.log(arr1);

const arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2.push('x');
}
console.log(arr2);

const numbers4 = [4, -3, 7, -1, 0, 9, -5];
const positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers4[i] > 0) {
        positiveNumbers.push(numbers4[i]);
    }
}
console.log(positiveNumbers);

const numbers5 = [2, 3, 4, 5];
for (let i = 0; i < numbers5.length; i++) {
    numbers5[i] = numbers5[i] ** 2;
}
console.log(numbers1);

const numbers6 = [5, 10, 15, 20];
for (let i = 0; i < numbers6.length; i++) {
    numbers6[i] -= 1;
}
console.log(numbers6);

const numbers7 = [1, 2, 3, 4];
for (let i = 0; i < numbers7.length; i++) {
    numbers7[i] += 10;
}
console.log(numbers7);

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let week = {};

for (let i = 0; i < arr1.length; i++) {
    week[arr1[i]] = arr2[i];
}

console.log(week);

let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let evenObj = {};

for (let key in obj1) {
    if (obj1[key] % 2 === 0) {
        evenObj[key] = obj1[key];
    }
}
console.log(evenObj);

let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let invertedObj = {};

for (let key in obj2) {
    invertedObj[obj2[key]] = key;
}
console.log(invertedObj);

let obj1 = {x: 1, y: 2, z: 3};

for (let key in obj1) {
    obj1[key] = obj1[key] ** 2;
}

console.log(obj1);

let obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
    obj2[key] += 1;
}

console.log(obj2);
