import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto{

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({},{message:'Please enter correct mail'})
  email :string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password : string;
}

export class SignupDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name:string;
 
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({},{message: 'Please enter correct mail'})
  email : string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

}