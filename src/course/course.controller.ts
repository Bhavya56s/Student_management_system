import { Body, Controller, Get, Post } from "@nestjs/common";
import { CourseService } from "./course.services";
import { CreateCourseDto } from "./dto/course.dto";

@Controller('/course')

export class CourseController{
  constructor (private courseService:CourseService){}

  @Post('/create')
  
  create(@Body()  createcourseDto: CreateCourseDto){
    return this.courseService.createCourse(createcourseDto);
  }

  @Get('/all')
 
  findall(){
    return this.courseService.findCourse();
  }
}