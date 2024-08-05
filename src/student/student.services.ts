import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./entity/student.entity";
import { Repository } from "typeorm";
import { Course } from "src/course/entity/course.entity";
import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";
import { classToPlain } from "class-transformer";

@Injectable()

export class StudentServices{
  constructor (@InjectRepository(Student)
    private studentRepository:Repository<Student>,
    @InjectRepository(Course)
    private courseRepository:Repository<Course>){}


    async createStudent(createStudentDto:CreateStudentDto):Promise<{message:string}>{

      const {courseId} = createStudentDto

      const course = await this.courseRepository.findOne({where:{id:courseId}})
      if(!course){
        throw new NotFoundException(`Course with ${courseId} not found`)
      }
      
      const student =  this.studentRepository.create({...createStudentDto,course})
      const created = this.studentRepository.save(student)
      if(!created){
        throw new NotFoundException(`Student not created`)
      }
      return {message:`Student registered sucesfully`}
    }


    async findAll():Promise<any>{
       const student = this.studentRepository.find({ relations: ['course'] });

       return classToPlain(student)
    }

    async findById(id:number):Promise<any>{
       
      const student = await this.studentRepository.findOne({where:{id},relations : ['course']})
      if(!student){
        throw new NotFoundException(`Student with ID ${id} not found`)
      }

      return classToPlain(student)
    }

    async remove(id:number):Promise<{message:string}>{

      const student = await this.studentRepository.findOne(
        {
        where:{id},
      }
    )
      if(!student){
        throw new NotFoundException(`Student with ID ${id} not found`)
      }
     
      const removed = await this.studentRepository.delete(id)
      if(!removed){
        throw new NotFoundException(`Student with ID ${id} not found`)
      }

      return {message:`Student's Info deleted sucessfully`}
    }

    async updateInfo(id:number,updateStudentDto:UpdateStudentDto):Promise<{message:string}>{

      const {courseId} = updateStudentDto

      const course = await this.courseRepository.findOne({where:{id:courseId}})
      if(!course){
        throw new NotFoundException(`Course with ${courseId} not found`)
      }

      const student = await this.studentRepository.findOne({where:{id},})
      if(!student){
        throw new NotFoundException(`Student with ID ${id} not found`)
      }

      const updated = this.studentRepository.update(id,updateStudentDto)
      if(!updated){
        throw new NotFoundException(`Updations are not done`)
      }
      return {message:`Student's info updated sucesfully`}
    }
}