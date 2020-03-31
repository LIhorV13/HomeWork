const origin = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    var target = {};
      function copy(target1, origin1) {
        for (let key in origin1) {
          target1[key] = origin1[key]; 
        }
        return target1;
      }
      for (let [key, value] of Object.entries(copy(target, origin))) {
    console.log(`${key}: ${value}`);
  }