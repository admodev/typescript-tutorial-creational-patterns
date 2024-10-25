import { Truck } from "../types";

export default abstract class VehicleFactory {
  abstract createTruck(): Truck;

  public deployTruck(truck: Truck): Truck {
    let newTruck: Truck = this.createTruck();

    newTruck.engine = truck.engine;
    newTruck.paint = truck.paint;
    newTruck.wheels = truck.wheels;

    return newTruck;
  }
}
