import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entity/course.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/course.dto";

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
async findCourseById():Promise<{message:string}>{
  return {message:``}
}
async removeCourse():Promise<{message:string}>{
  return {message:``}
}
async updateCourse():Promise<{message:string}>{
  return {message:``}
}
}