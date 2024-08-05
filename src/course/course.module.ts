import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/entity/course.entity';
import { Student } from 'src/student/entity/student.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.services';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forFeature([ Student,Course]),AuthModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [TypeOrmModule],
})
export class CourseModule {}

