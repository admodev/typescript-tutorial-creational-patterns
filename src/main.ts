import VehicleFactory from "./patterns/factory";
import { PaintColors, Truck } from "./types";

class Vehicle extends VehicleFactory {
  constructor(private truck: Truck) {
    super();
  }

  createTruck(): Truck {
    return this.truck;
  }
}

const redTruck: Truck = {
  engine: "V8",
  wheels: 16,
  paint: PaintColors.RED,
};

let vehicles: Array<object> = [];
const truckOne = new Vehicle(redTruck);
const truckOneImpl = truckOne.createTruck();

vehicles.push(truckOneImpl);

console.log("Current vehicles in the fleet");

for (let vehicle of vehicles) {
  console.log(vehicle);
}
