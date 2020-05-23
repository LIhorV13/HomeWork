

function Animal(sex) {
    this.sex = sex;
}

    Animal.prototype.run = function() {
      console.log("run of animal with sex "+this.sex) ;    
    }

    Animal.prototype.jump = function() {
        console.log("run of animal with sex "+this.sex);    
    }

function mleko(sex) {
    Animal.call(this,sex);
}

    mleko.prototype = Object.create(Animal.prototype);
    mleko.prototype.constructor = mleko;

    mleko.prototype.giveMilk = function() {
        if(sex ==="woman") return true;
        else return false;  
    }

function enot(sex) {
  mleko.call(this, sex);
}

    enot.prototype = Object.create(mleko.prototype);
    enot.prototype.constructor = enot;

    enot.prototype.steal = function(some) {
        console.log("enot with sex: "+this.sex+" stole "+some);
    }

    let someAnimal = new Animal("man");
    someAnimal.run();
    someAnimal.jump();

    let someMleko = new mleko("woman");
    someMleko.run();
    someMleko.jup();
    console.log(someMleko.giveMilk());

    let someEnot = new enot("man");
    someEnot.run();
    someEnot.jump();
    console.log(someEnot.giveMilk());

    someEnot.steal("carrot");