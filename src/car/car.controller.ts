import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  @ApiOkResponse({
    description: 'The resource list for cars has been successfully returned',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public async getCars() {
    const result = await this.carService.getCars();
    return result;
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource for cars has been successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public async postCar(@Body() car: CarDto) {
    const result = await this.carService.postCar(car);
    return result;
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The resource for car has been successfully returned',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public async getCarById(@Param('id') id: number) {
    const result = await this.carService.gettCarById(id);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The resource for cars has been successfully removed',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public async deletetCarById(@Param('id') id: number) {
    const result = await this.carService.deleteCarById(id);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'The resource for car has been successfully updated',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public async putCarById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    const result = await this.carService.putCarById(
      id,
      propertyName,
      propertyValue,
    );
    return result;
  }
}
