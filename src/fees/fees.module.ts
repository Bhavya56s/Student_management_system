import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeSubmission } from 'src/fees/entity/fees.entity';
import { Student } from 'src/student/entity/student.entity';


@Module({
  imports: [TypeOrmModule.forFeature([FeeSubmission, Student])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class FeeSubmissionModule {}