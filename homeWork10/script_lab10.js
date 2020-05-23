function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return distance <= this.maxDistance;
};
Unit.prototype.isReadyToFight = function () {
    return  this.health >= this.maxHealth / 2;
};
Unit.prototype.restore = function () {
    if (this.health < this.maxHealth) {
        this.health = this.maxHealth;
    }
};
Unit.prototype.clone = function () {
    return Object.assign({}, this);
};

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (distance) {
    for (let v = 0; v < this.units.length; v++) {
        if(!this.units[v].isReadyToMove(distance))return false
    }
   return true;
};
Army.prototype.isReadyToFight = function () {
    for (let v = 0; v < this.units.length; v++) {
        if (!this.units[v].isReadyToFight()) return false
    }
    return true;
};
Army.prototype.restore = function () {
    for (let v = 0; v < this.units.length; v++) {
        this.units[v].restore();
    }
};
Army.prototype.getReadyToMoveUnits = function (distance) {
    let readyUnits = [];
    for (let v = 0; v < this.units.length; v++) {
        if (this.units[v].isReadyToMove(distance)) readyUnits.push(this.units[v]);
    }
};
Army.prototype.combineUnits = function (arr) {
    for (let v = 0; v < arr.length; v++) {
        this.units.push(arr[v]);
    }
};
Army.prototype.cloneUnit = function (id) {
    return this.units[id].clone();
};
