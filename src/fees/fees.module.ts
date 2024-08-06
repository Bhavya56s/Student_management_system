import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeSubmission } from 'src/fees/entity/fees.entity';
import { Student } from 'src/student/entity/student.entity';
import { FeeController } from './fees.controller';
import { FeeService } from './fees.services';
import { AuthModule } from 'src/auth/auth.module';
import { CourseModule } from 'src/course/course.module';
import { StudentModule } from 'src/student/student.module';


@Module({
  imports: [TypeOrmModule.forFeature([FeeSubmission, Student]),AuthModule,CourseModule,StudentModule],
  controllers: [FeeController],
  providers: [FeeService],
  exports: [TypeOrmModule],
})
export class FeeSubmissionModule {}