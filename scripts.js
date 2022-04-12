const obj = {
    name: 'Alex',
    age: 33,
    adress: {
        country: 'UA',
        city: 'Dnipro',
    },
}

function copyObj(obj) {
let ourObj;
let copy = {};

for (let key in obj) {
ourObj = obj[key];
copy[key] = typeof ourObj === 'object' ? copyObj(ourObj) : ourObj;
}
return copy;
}

let copy=copyObj(obj);

const objCopy = copyObj(obj);
objCopy.name = 'Yura';
objCopy.age = 31;
objCopy.adress.city = 'Vinnitsa';

console.log(obj);
console.log(objCopy);