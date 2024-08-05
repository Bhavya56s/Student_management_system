import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStudentDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name:string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail({},{message:'Please enter Correct mail'})
  email:string;


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  courseId:number;
}

export class UpdateStudentDto{
  @ApiProperty()
  @IsOptional()
  @IsString()
  name:string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail({},{message:'Please enter Correct mail'})
  email:string;


  @ApiProperty()
  @IsOptional()
  @IsNumber()
  courseId:number;

}