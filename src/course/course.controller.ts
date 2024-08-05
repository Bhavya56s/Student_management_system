import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CourseService } from "./course.services";
import { CreateCourseDto, UpdateCourseDto } from "./dto/course.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";

@ApiSecurity('JWT-Auth')
@Controller('/course')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Course')

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

  @Get('/:id')
  findCourseById(@Param('id') id : number){
    return this.courseService.findCourseById(id)
  }

  @Put('/:id')
  updateCourse(@Param('id') id:number,@Body() updateCourseDto:UpdateCourseDto){
    return this.courseService.updateCourse(id,updateCourseDto)
  }
  
  @Delete('/:id')
  removeCourse(@Param('id') id:number){
    return this.courseService.removeCourse(id)
  }
}