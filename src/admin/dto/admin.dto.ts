import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateAdminDto{
@ApiProperty()
@IsOptional()
name:string

@ApiProperty()
@IsOptional()
email:string

@ApiProperty()
@IsOptional()
password:string
}