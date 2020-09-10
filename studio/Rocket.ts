import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {Payload} from './Payload';

export class Rocket{
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
 
    constructor(name: string, totalCapacityKg: number ) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
       this.astronauts = [];
       this.cargoItems = [];
    }

    //Returns the sum of all items using each item's massKg property
    sumMass( items: Payload[] ): number{
        let sum:number = 0;
        for (let payload of items) {
            sum += payload.massKg;
          }
        return sum;
    }

    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        let sum: number = 0;
        for (let astronaut of this.astronauts) {
            sum += astronaut.massKg;
          }
          for (let cargo of this.cargoItems) {
            sum += cargo.massKg;
          }
        return sum;
    }

    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg ? true : false; //ternary conditional operator
    }

    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    addCargo(cargo: Cargo): boolean {
        return this.canAdd(cargo) ? (this.cargoItems.push(cargo), true): false;
    }


    //Uses this.canAdd() to see if another astronaut can be added.
    // If true, adds astronaut to this.astronauts and returns true.
    // If false, returns false
    addAstronaut(astronaut: Astronaut): boolean {
        return this.canAdd(astronaut) ? (this.astronauts.push(astronaut), true): false;
    }



 }