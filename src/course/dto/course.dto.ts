import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCourseDto{
  @ApiProperty()
  @IsNotEmpty()
  name:string

  @ApiProperty()
  @IsNotEmpty()
  fees:number;
}

export class UpdateCourseDto{
  @ApiProperty()
  @IsOptional()
  name:string

  @ApiProperty()
  @IsOptional()
  fees:number
}