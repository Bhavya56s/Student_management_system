import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/entity/course.entity';
import { Student } from 'src/student/entity/student.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.services';


@Module({
  imports: [TypeOrmModule.forFeature([ Student,Course])],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [TypeOrmModule],
})
export class CourseModule {}

