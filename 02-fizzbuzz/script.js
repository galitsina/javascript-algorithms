/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else (console.log(i))
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(30));

//1. Цикл от 1 до num вывести в консоль все эти числа
//2. Если num/3 без остатка, вывести fizz, Если num/5 без остатка, вывести buzz
//Если num/3  и на 5 и на 15 без остатка, вывести fizzbuz