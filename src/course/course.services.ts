import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entity/course.entity";
import { Repository } from "typeorm";
import { CreateCourseDto, UpdateCourseDto } from "./dto/course.dto";

@Injectable()

export class CourseService{
  constructor(@InjectRepository(Course)
private courseRepository:Repository<Course>){}


async createCourse(createCourseDto:CreateCourseDto):Promise<{message:string}>{
  
  const course = this.courseRepository.create(createCourseDto)
  const courses = await this.courseRepository.save(course)
  if(!courses){
    throw new NotFoundException(`Course not created`)
  }


  return {message:`${courses.name} sucessfully created`}
}


async findCourse():Promise<Course[]>{
  return (this.courseRepository.find())
}


async findCourseById(id:number):Promise<Course>{
  
  const course = await this.courseRepository.findOne({where : {id}})
  if(!course){
    throw new  NotFoundException(`Course with ID ${id} not found`)
  }
  return course
}


async removeCourse(id:number):Promise<{message:string}>{

  const course = await this.courseRepository.findOne({where:{id}})
  if(!course){
    throw new NotFoundException(`Course with ID ${id} not found`)
  }

  const remove = await this.courseRepository.delete(id)
  if(!remove){
    throw new NotFoundException(`Course with ${id} not found`)
  }
  return {message:`Course with id ${id} deleted sucessfully`}
}


async updateCourse(id:number,updateCourseDto:UpdateCourseDto):Promise<{message:string}>{

  const course = await this.courseRepository.findOne({where:{id}})
  if(!course){
    throw new NotFoundException(`Course with ID ${id} not found`)
  }

  const updates = await this.courseRepository.update(id,updateCourseDto)
  if(!updates){
    throw new NotFoundException(`Course with ID ${id} not found`)
  }
  return {message:`Course with ID ${id} updated succesfully`}
}
}