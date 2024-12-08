//task150_1
let sumEven = 0;
        for (let i = 2; i <= 100; i += 2) {
            sumEven += i;
        }
        console.log(sumEven);
//task150_2
let sumOdd = 0;
        for (let i = 1; i < 100; i += 2) {
            sumOdd += i;
        }
        console.log(sumOdd);
        //task150_3
let product = 1;
        for (let i = 1; i <= 20; i++) {
            product *= i;
        }
        console.log(product);
        //task151_1
let arr = [2, 5, 9, 3, 1, 4];
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        console.log(sum);
        //task151_2
let arr = [2, 5, 9, 3, 1, 4];
        let sumEven = 0;
        for (let elem of arr) {
            if (elem % 2 === 0) {
                sumEven += elem;
            }
        }
        console.log(sumEven);
        //task151_3
let arr = [2, 5, 9, 3, 1, 4];
        let sumSquares = 0;
        for (let elem of arr) {
            sumSquares += elem ** 2;
        }
        console.log(sumSquares);
//task151_4
let arr = [2, 5, 9, 3, 1, 4];
        let product = 1;
        for (let elem of arr) {
            product *= elem;
        }
        console.log(product);
//task152_1 
let str = '';
        for (let i = 0; i < 5; i++) {
            str += '-';
        }
        console.log(str);
//task152_2    
let str = '';
        for (let i = 1; i <= 9; i++) {
            str += i;
        }
        console.log(str);
//task152_3  
let str = '';
        for (let i = 9; i >= 1; i--) {
            str += i;
        }
        console.log(str);       
//task152_4
let str = '';
        for (let i = 1; i <= 9; i++) {
            str += `-${i}`;
        }
        str += '-';
        console.log(str);  