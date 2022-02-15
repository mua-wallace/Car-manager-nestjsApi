import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './cars.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  private cars = CARS;
  public getCars() {
    return this.cars;
  }

  public postCar(car) {
    return this.cars.push(car);
  }

  public gettCarById(id: number): Promise<any> {
    const carId = Number(id);
    const car = this.cars.find((car) => car.id == carId);
    return new Promise((resolve) => {
      if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return resolve(car);
    });
  }

  public deleteCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const index = this.cars.findIndex((car) => car.id == carId);
      if (index == -1) {
        throw new HttpException('Not Found', 404);
      }
      this.cars.splice(index, 1);
      return resolve(this.cars);
    });
  }

  public putCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const index = this.cars.findIndex((car) => car.id == carId);
      if (index == -1) {
        throw new HttpException('Not Found', 404);
      }
      this.cars[index][propertyName] = [propertyValue];
      return resolve(this.cars);
    });
  }
}
