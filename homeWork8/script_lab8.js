//realization of isSymbolPresentInString(str, symbol) function
function isSymbolPresentInString(str, symbol) {
    let sp = str.split('');
    for (let v = 0; v < sp.length; v++) {      
        if (sp[v] ===(symbol)) {
            return true;
        }
    }
    return false;
}
console.log(isSymbolPresentInString("abc", 'c'));

//realization of getSymbolIndex(str, symbol) function
function getSymbolIndex(str, symbol) {
    let sp = str.split('');
    for (let v = 0; v < sp.length; v++) {
        if (sp[v] === (symbol)) {
            return v;
        }
    }
    return -1;
}
console.log(getSymbolIndex("hello lol", "l"));

//realization of ForEach function
function callbackForEach(name) {
    console.log(name);
}

function myForEach(arr, print) {
    for (let v = 0; v < arr.length; v++) {
        print(arr[v]);
    }
}

myForEach([1, 2, 3, 4], callbackForEach);

//realization of map function
function callbackMap(name) {
    return name*2;
}
function myMap(arr, print) {
    let arrRes = arr;
    for (let v = 0; v < arrRes.length; v++) {
        arrRes[v]=print(arr[v]);
    }
    return arrRes;
}
console.log(myMap([1, 2, 3, 4], callbackMap));

//realization of filter function
function callbackFilter(name) {
    if (name.length < 7)
        return true;
    else
        return false;
}
function myFilter(arr, print) {
    let arrRes =[];
    for (let v = 0; v < arr.length; v++) {
        if( print(arr[v]))arrRes.push( arr[v]);
    }
    return arrRes;
}
console.log(myFilter(["filter", "Ihor", "aaaaaaaaa", "bh", "gfgfgfgfg"], callbackFilter));

//realization of some function
function callbackSome(name) {
    if (name % 2 === 0)
        return true;
    else
        return false;
}
function mySome(arr, print) {
    for (let v = 0; v < arr.length; v++) {
        if (print(arr[v])) return true;
    }
    return false;
}
console.log(mySome([1, 3, 4, 5], callbackSome));

//realization of every function
function callbackEvery(name) {
    if (name > 10)
        return true;
    else
        return false;
}
function myEvery(arr, print) {
    for (let v = 0; v < arr.length; v++) {
        if (!print(arr[v])) return false;
    }
    return true;
}
console.log(myEvery([12, 51, 8, 130, 44], callbackEvery));

