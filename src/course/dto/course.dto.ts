import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCourseDto{
  @ApiProperty()
  @IsNotEmpty()
  name:string

  @ApiProperty()
  @IsNotEmpty()
  fees:number;
}