/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (str.length === 0) {
        return str;
    }
    str = str[0].toUpperCase() + str.substring(1);
    return str.split('').reduce(function(preSymbol, symbol) {
        if (preSymbol[preSymbol.length-1] === ' ') {
            return preSymbol + symbol.toUpperCase();
        } else {
            return preSymbol + symbol;
        }
    });
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
