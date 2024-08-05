import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admins } from "./entity/admin.entity";
import { Repository } from "typeorm";
import { UpdateAdminDto } from "./dto/admin.dto";
import * as bcrypt from 'bcryptjs';
import { classToPlain } from "class-transformer";


@Injectable()

export class AdminServices{
  constructor(@InjectRepository(Admins)
private adminRepository:Repository<Admins>){}

async findAll():Promise<any>{
  return classToPlain(this.adminRepository.find())
}

async findById(id:number):Promise<any>{

  const admin = await this.adminRepository.findOne({where:{id}})
  if(!admin){
    throw new NotFoundException(`Admin with ${id} not found`)
  }
  return classToPlain(admin)
}

async removeInfo(id:number):Promise<{message:string}>{

  const admin = await this.adminRepository.findOne({where:{id}})
  if(!admin){
    throw new NotFoundException(`Admin with ${id} not found`)
  }
  const  removed= await this.adminRepository.delete(id)
  if(!removed){
    throw new NotFoundException(`Data cannot be deleted`)
  }
  return {message:`Data sucesfully deleted`}
}

async updateInfo(id:number,updateAdminDto:UpdateAdminDto):Promise<{message:string}>{

  const admin = await this.adminRepository.findOne({where:{id}})
  if(!admin){
    throw new NotFoundException(`Admin with ${id} not found`)
  }
  if (updateAdminDto.password) {
    const hashedPassword = await bcrypt.hash(updateAdminDto.password, 10);
    updateAdminDto.password = hashedPassword;
  }
  const updated = await this.adminRepository.update(id,updateAdminDto)
  if(!updated){
    throw new NotFoundException(`Data cannot updated`)
  }
  return {message:`Data updated sucessfully`}
}
}