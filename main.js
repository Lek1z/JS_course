'use strict';

// Задание №1

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}

// Задание №2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание №3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(el => {
    el.price *= 0.85;
    console.log('Цена товара ID = ' + el.id + ' со скидкой 15% = ' + el.price);
})

// Задание №4

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let arr1 = products1.filter(el => {
    if ('photos' in el) {
        if (el.photos.length > 0) {
            return el;
        }
    }
});

let arr2 = products1.sort((a, b) => {
    return a.price - b.price
});

console.log(arr1);
console.log(arr2);

// Задание №5

function count (a) {
    console.log(a);
}

for (let i = 0; i < 10; count(i), i++);

// Задание №6

for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}