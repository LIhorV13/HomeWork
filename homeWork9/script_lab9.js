//sum function 
var sumRes = null;
function sum(arg) {
    if (sumRes === null) {
        sumRes = arg;
    }
    else {
        sumRes += arg;
    }
    return sumRes;
}
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

//copy function
let toCopy = {
    name: "Ihor",
    arr: [1, 2, 3],
    obj:
     {
         name: "Ihor",
         arr: [1, 2, 3]
     },
    arrObj: [
          {
              name: "Ihor",
              arr: [1, 2, 3]
          },
          {
              name: "Ihor",
              arr: [1, 2, 3]
          }
    ],
};

function copy(coppied, toCopy) {
    if (typeof toCopy === "object") {
        for (let key in toCopy) {
            if (Array.isArray(toCopy[key])) {
                coppied[key] = copy([], toCopy[key]);
            } else if (typeof toCopy[key] === "object") {
                coppied[key] = copy({}, toCopy[key]);
            } else {
                coppied[key] = toCopy[key];
            }
        }
    }
    else {
        coppied = toCopy;
    }
    return coppied;
}
let m = [];
console.log(copy(m, [1, 2, 3]));
let m1;
console.log(copy(m1, 5));
let m2;
console.log(copy(m2, "Ihor"));
let copied = {};
console.log(copy(copied, toCopy));
