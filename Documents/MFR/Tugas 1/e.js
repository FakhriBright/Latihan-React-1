// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const gabunganArr = [...arr1, ...arr2];
console.log(gabunganArr);

// Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const gabunganObj = { ...obj1, ...obj2 };
console.log(gabunganObj);
