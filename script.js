// << 1. Object kalitlari va qiymatlarini tengligini tekshirish >>>


// const data = {
// а: 1,
// б: 1
//};

// const data2 = {
// а: 1,
// б: 1
//};

// const data3 = {
// а: 1,
// Би 2
//};
// const areEqual = (num1, num2) => {
// if (Object.entries (num1) .toString () === Object.entries (num2) .toString ()) {
// возвращаем истину
// } еще {
// возвращаем false
//}
//}

// console.log (areEqual (data, data2));





// // <<< 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish >>>

// const data = {a: {b: undefined}};

// const data2 = {a: {b: 'это действительно существует'}};

// const data3 = {
// a: {
// b: 'оно существует',
// innerKey: null
//}
//};

  
// const nestedValueExists = (число) => {
// если (num.ab === undefined) {
// возвращаем false
//} else if (num.a.innerKey === null) {
// вернуть ложь;
//} иначе вернет истину
//}

// console.log (nestedValueExists (данные));

// // <<< 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish >>>


// const data = {
// Би 2,
// а: 1,
//};

// const data2 = {
// Би 2,
// c: 1,
//};

// const data3 = {
// c: 3,
// б: 5
//};


// const checkSame = (num, num1) => {
// if (Object.values ​​(num) .toString () === Object.values ​​(num1) .toString () || 
// Object.keys (num) .toString () === Object.keys (num1) .toString ()
//) {
// возвращаем истину
// } еще {
// возвращаем false
//}
//}

// console.log (checkSame (data2, data3));