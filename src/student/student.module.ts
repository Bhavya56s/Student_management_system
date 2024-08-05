import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { FeeSubmission } from 'src/fees/entity/fees.entity';
import { Course } from 'src/course/entity/course.entity';
import { AuthModule } from 'src/auth/auth.module';
import { StudentController } from './student.controller';
import { StudentServices } from './student.services';


@Module({
  imports: [TypeOrmModule.forFeature([FeeSubmission, Student,Course]),AuthModule],
  controllers: [StudentController],
  providers: [StudentServices],
  exports: [TypeOrmModule],
})
export class StudentModule {}