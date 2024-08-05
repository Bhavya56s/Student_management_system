import { Exclude } from "class-transformer";
import { IsEmail, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Admins{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @Column()
  @IsEmail()
  email:string

  @Column()
  @Exclude()
  @MinLength(6)
  password:string 

}