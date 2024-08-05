import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { FeeSubmissionModule } from './fees/fees.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3307,
    username:'root',
    password:'root',
    database:'student_management_system',
    autoLoadEntities:true,
    synchronize:true
    
  }),
CourseModule,FeeSubmissionModule,StudentModule,AuthModule,AdminModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

