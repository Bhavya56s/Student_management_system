import { Exclude } from "class-transformer";
import { IsEmail, MinLength } from "class-validator";
import { Course } from "src/course/entity/course.entity";
import { FeeSubmission } from "src/fees/entity/fees.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
 export class Student{
  @PrimaryGeneratedColumn()
  id:number;

  @Column({nullable:false})
  name:string;

  @Column({unique:true,nullable:false})
  @IsEmail()
  email:string;

 

  @ManyToOne(() => Course, (course) => course.students,{onDelete:'CASCADE'})
  @JoinColumn({ name: 'CourseId' })
  course: Course;

  @OneToMany(() => FeeSubmission, (feeSubmission) => feeSubmission.student,{onDelete:'CASCADE',cascade:true})
  feeSubmissions: FeeSubmission[];

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @UpdateDateColumn({type:'timestamp'})
  updated_at:Date;
 }