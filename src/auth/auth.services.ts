import {  Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin, Repository } from "typeorm";
import { LoginDto, SignupDto } from "./dto/auth.dto";
import * as bcrypt from 'bcryptjs';
import { Admins } from "src/admin/entity/admin.entity";

@Injectable() 

export class AuthService {
  constructor(
    @InjectRepository(Admins)
    private adminRepository:Repository<Admins>,
    private jwtService : JwtService,
  ){}

  async signUp(signupDto:SignupDto):Promise<{message : string,token:string}>{

    const {name,email,password} = signupDto;

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = this.adminRepository.create({
      name,
      email,
      password: hashedPassword,
      
    })

    await this.adminRepository.save(admin);

    const token = this.jwtService.sign({id : admin})
    return {
    message : `${name} succesfully registered`, 
    token
    };
  }

  async login(loginDto: LoginDto):Promise<{message : string, token : string}>{

    const {email,password} = loginDto;
     
    const user = await this.adminRepository.findOne({where:{email}})

    if(!user){
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password,user.password);

    if(!isPasswordMatched){
      throw new UnauthorizedException('Invalid Email or password')
    }

    const token = this.jwtService.sign({id:user.id});
    return {
      message:`${user.name} succesfully login`,
      token,
    }
  }
}

