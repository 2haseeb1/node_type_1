import Car from './car.model';
import { ICar } from './car.interface';

export const carService = {
  
 
  async createCar(carData: ICar) {
    return await Car.create(carData);
  },

  
  async getCars(searchTerm?: string) {
    const filter: Record<string, unknown> = {}; 

    if (searchTerm) {
      filter.$or = [
        { brand: { $regex: searchTerm, $options: 'i' } },
        { model: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    return await Car.find(filter);
  },

  
  async getCarById(carId: string) {
    return await Car.findById(carId);
  },

  
  async updateCar(carId: string, carData: ICar) {
    return await Car.findByIdAndUpdate(carId, carData, { new: true });
  },

 
  async deleteCar(carId: string) {
    return await Car.findByIdAndDelete(carId);
  },
};
