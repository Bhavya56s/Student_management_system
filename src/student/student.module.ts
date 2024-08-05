import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { FeeSubmission } from 'src/fees/entity/fees.entity';
import { Course } from 'src/course/entity/course.entity';


@Module({
  imports: [TypeOrmModule.forFeature([FeeSubmission, Student,Course])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class StudentModule {}