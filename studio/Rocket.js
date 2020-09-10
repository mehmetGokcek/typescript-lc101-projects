"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.astronauts = [];
        this.cargoItems = [];
    }
    //Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var payload = items_1[_i];
            sum += payload.massKg;
        }
        return sum;
    };
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        var sum = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var astronaut = _a[_i];
            sum += astronaut.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var cargo = _c[_b];
            sum += cargo.massKg;
        }
        return sum;
    };
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg ? true : false; //ternary conditional operator
    };
    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    Rocket.prototype.addCargo = function (cargo) {
        return this.canAdd(cargo) ? (this.cargoItems.push(cargo), true) : false;
    };
    //Uses this.canAdd() to see if another astronaut can be added.
    // If true, adds astronaut to this.astronauts and returns true.
    // If false, returns false
    Rocket.prototype.addAstronaut = function (astronaut) {
        return this.canAdd(astronaut) ? (this.astronauts.push(astronaut), true) : false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
