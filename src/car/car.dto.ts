import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
  @ApiProperty({
    type: String,
    description: 'The brand of the car',
    default: '',
  })
  // readonly id: number;
  readonly brand: string;
  @ApiProperty({
    type: String,
    description: 'The color of the car',
    default: '',
  })
  readonly color: string;
  @ApiProperty({
    type: String,
    description: 'The model of the car',
    default: '',
  })
  readonly model: string;
}
