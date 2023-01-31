/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const arr = arr1.filter(function(number) {
        return arr2.includes(number);
    })

    return arr.filter(function (number, position) {
        return arr.lastIndexOf(number) === position;
    })
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(intersection([], [])); // []
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []