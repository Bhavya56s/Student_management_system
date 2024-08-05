import { Student } from "src/student/entity/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 export class Course{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string

  @Column('decimal', { precision: 10, scale: 2 })
  fees:number

  @OneToMany(() => Student, (student) => student.course,{onDelete:'CASCADE',cascade:true})
  students: Student[];
 }