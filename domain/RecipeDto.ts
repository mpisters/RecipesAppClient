import {UnitOfMeasurementDto} from './UnitOfMeasurement';

export interface RecipeDto {
  id?: number;
  name?: string;
  cookingTime?: number;
  totalPersons?: number;
}

export interface IngredientDto {
  id?: number;
  product: ProductDto;
  amount?: number;
  unitOfMeasurement?: UnitOfMeasurementDto;
}


export interface ProductDto {
  name?: string;
}

