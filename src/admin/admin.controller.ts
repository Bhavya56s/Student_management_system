import { Body, Controller, Delete, Get, Param, Put, UseGuards } from "@nestjs/common";
import { AdminServices } from "./admin.services";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { UpdateAdminDto } from "./dto/admin.dto";

@ApiSecurity('JWT-Auth')
@ApiTags('Admins')
@Controller('/admin')
@UseGuards(AuthGuard('jwt'))

export class AdminController{
  constructor(private adminServices:AdminServices){}

  @Get('/all')
  findAll(){
    return this.adminServices.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id:number){
    return this.adminServices.findById(id)
  }

  @Put('/:id')
  updateInfo(@Param('id') id:number,@Body() updateAdminDto:UpdateAdminDto){
    return this.adminServices.updateInfo(id,updateAdminDto)
  }

  @Delete('/:id')
  removeInfo(@Param('id') id:number){
    return this.adminServices.removeInfo(id)
  }
}