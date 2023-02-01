/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const string1 = str1.toLowerCase();
    const string2 = str2.toLowerCase();

    if (string1 === string2){
        return false;
    }

    const array1 = string1.split('').sort(function (a,z){
        if (a < z) return -1;
        if (z < a) return 1; 
        return 0;
    });
    const array2 = string2.split('').sort(function (a,z){ 
        if (a < z) return -1;
        if (z < a) return 1; 
        return 0;
    });

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i=0; i<array1.length; i++) {
        if  (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
