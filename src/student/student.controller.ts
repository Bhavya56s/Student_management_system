import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";
import { StudentServices } from "./student.services";

@ApiSecurity('JWT-Auth')
@ApiTags('Students')
@Controller('/student')
@UseGuards(AuthGuard('jwt'))

export class StudentController{
  constructor(private studentServices:StudentServices){}


  @Post('/create')
  createStudent(@Body() createStudentDto:CreateStudentDto){
    return this.studentServices.createStudent(createStudentDto);
  }

  @Get('/all')
  findAll(){
    return this.studentServices.findAll();
  }
 
  @Get('/:id')
  findById(@Param('id') id:number){
    return this.studentServices.findById(id)
  }

  @Delete('/:id')
  remove(@Param('id') id:number){
    return this.studentServices.remove(id)
  }
  
  @Put('/:id')
  updateInfo(@Param('id') id:number,@Body() updateStudentDto:UpdateStudentDto){
   return this.studentServices.updateInfo(id,updateStudentDto)
  }
}