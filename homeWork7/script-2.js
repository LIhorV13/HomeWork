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
    for (let [key, value] of Object.entries(origin1)) {
      for (let [key1, value1] of Object.entries(target1)) {
        if (key === key1 && value === value1) {
          res = true;
          break;
        }
      }
      if (res === false) return false;
      else res = false;
    }
    return true;
  }
  console.log(compare(origin, emptyCheck));