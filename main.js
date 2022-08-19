'use strict';

// Задание №1

class NumberObj {

    constructor(number) {
        this.units = number % 10;
        this.tens = Math.floor(number / 10) % 10;
        this.hundereds = Math.floor(number / 100) % 10;
        this.dataOut();
    }

    dataOut() {
        console.log('Единицы: ' + this.units);
        console.log('Десятки: ' + this.tens);
        console.log('Сотни: ' + this.hundereds);
    }
}

let answer = Number(prompt('Введите целое число'));

while (!(Number.isInteger(answer))) {
    answer = Number(prompt('Вы ввели не целое число'));
}

let test = new NumberObj(answer);
console.log(test);

// Задание №1.1

// es5
function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

ProductEs5.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
};

let obj1Es5 = new ProductEs5('Яблоко', 123);
console.log(obj1Es5);

obj1Es5.make25PercentDiscount();
console.log(obj1Es5);

// es6
class ProductEs6 {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let obj1Es6 = new ProductEs6('Яблоко', 123);
console.log(obj1Es6);

obj1Es6.make25PercentDiscount();
console.log(obj1Es6);

// Задание 1.2

// es5
function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostEs5.prototype.edit = function(newText) {
    this.text = newText;
};

function AttachedPostEs5(author, text, date) {
    PostEs5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;

AttachedPostEs5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let obj2Es5 = new AttachedPostEs5('Ivan', 'Lorem', '25.04.2002');
console.log(obj2Es5);
obj2Es5.edit('New Text');
obj2Es5.makeTextHighlighted();
console.log(obj2Es5);

// es6
class PostEs6 {

    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        this.text = newText;
    }
}

class AttachedPostEs6 extends PostEs6 {

    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj2Es6 = new AttachedPostEs6('Ivan', 'Lorem', '25.04.2002');
console.log(obj2Es6);
obj2Es6.edit('New Text');
obj2Es6.makeTextHighlighted();
console.log(obj2Es6);