const origin = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  var emptyCheck = {};
  
  function compare(target, origin) {
    let origin1 = {};
    let target1 = {};
    let res = false;
    if(Object.keys(target).length > Object.keys(origin).length) {
      origin1 = Object.assign(target);
      target1 = Object.assign(origin);
    }else{
      origin1 = Object.assign(origin);
      target1 = Object.assign(target);
    }
    for (let key in origin1) {
      if(target1[key] !== origin1[key]) {
        return false;
      } 
    }
    return true;
  }
  console.log(compare(origin, emptyCheck));