import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class PayfeeDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  deposit:number
}