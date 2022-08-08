'use strict';

// Задание №1

let a = 1, b = 1, c, d;

/* операции происходят последовательно слево направо, поэтому
сначала сработает инкремент ++ (переменная а увеличится на 1 и станет a = 2),
после чего переменной с присвоится значение переменной а, т.е. 2
*/
c = ++a;
alert(c); // 2

/* тут в точности наоборот, т.к. инкремент стоит справа, т.е.
сначала переменной d присвоится значение переменной b (d = 1), после чего
b увеличится на 1 и станет b = 2
*/
d = b++;
alert (d); // 1

/* сначала сработает инкремент ++ (переменная а увеличится на 1 и станет a = 3),
после чего произойдет сложение 2 + 3 = 5 и это значение присвоится
переменной с (с = 5)
*/
c = 2 + ++a;
alert (c); // 5

/* сначала произойдет сложение 2 + 2 = 4 и это значение присвоится переменной
d (d = 4), после чего сработает инкремент ++ и b увеличится на 1 (b = 3)
*/
d = 2 + b++;
alert(d); // 4

/*
т.к. во время выполнения кода программы инкремент был использован по 2 раза
на каждую переменную, то эти переменные увеличились на 2 (a = 3, b = 3)
*/
alert(a); // 3
alert(b) // 3

// Задание №2

/* сначала выполнится действие в скобках, a *= 2 то же самое, что и a = a * 2,
что в результате даст нам 4, после чего произойдет сложение 1 + 4 = 5 и это
значение присвоится переменной x (x = 5)
*/
a = 2;
let x = 1 + (a *= 2); // 5

// Задание №3

a = Number(prompt('Введите число a'));
b = Number(prompt('Введите число b'));

if (isNaN(a) || isNaN(b)) {
    alert('Вы ввели не числа');
} else if (a >= 0 && b >= 0) {
    alert('a - b = ' + (a - b));
} else if (a < 0 && b < 0) {
    alert('a * b = ' + (a * b));
} else alert ('a + b = ' + (a + b));

// Задание №4

function sum(a, b) {
    return a + b
};

function sub(a, b) {
    return a - b
};

function multi(a, b) {
    return a * b
};

function div(a, b) {
    return a / b
};

console.log(sum(6, 2)); // 8
console.log(sub(6, 2)); // 4
console.log(multi(6, 2)); // 12
console.log(div(6, 2)); // 3

// Задание №5

function mathOperation(a, b, operation) {
    switch(operation) {
        case '+':
            console.log(sum(a, b));
            break;
        case '-':
            console.log(sub(a, b));
            break;
        case '*':
            console.log(multi(a, b));
            break;
        case '/':
            console.log(div(a, b));
            break;
        default:
            console.log('Что-то пошло не так');
    };
};

mathOperation(6, 2, '+'); //8
mathOperation(6, 2, '-'); //4
mathOperation(6, 2, '*'); //12
mathOperation(6, 2, '/'); //3

// Задание №6

let payment = Number(prompt('Сколько денег вы хотите положить?'));

if (isNaN(payment) || payment <= 0) alert('Некорректная сумма');

if ((payment % 10 == 1) && (Math.floor(((payment % 100) / 10)) != 1)) {
    alert('Ваша сумма в ' + payment + ' рубль успешно зачислена.');
} else if (((payment % 10 == 2) || (payment % 10 == 3) || (payment % 10 == 4)) && (Math.floor(((payment % 100) / 10)) != 1)) {
    alert('Ваша сумма в ' + payment + ' рубля успешно зачислена.');
} else alert('Ваша сумма в ' + payment + ' рублей успешно зачислена.');