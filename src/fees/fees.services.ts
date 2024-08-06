import {  Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/entity/course.entity';
import { Student } from 'src/student/entity/student.entity';
import { Not, Repository } from 'typeorm';
import { FeeSubmission } from './entity/fees.entity';
import { PayfeeDto } from './dto/fees.dto';


@Injectable()
export class FeeService {
  constructor(
    @InjectRepository(FeeSubmission)
    private feeRepository: Repository<FeeSubmission>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async payFee(studentId: number, payFeeDto: PayfeeDto): Promise<FeeSubmission> {
    const student = await this.studentRepository.findOne({ where: { id: studentId }, relations: ['course'] });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const course = student.course;
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const fees = await this.feeRepository.find({ where: { student: { id: studentId } } });

    const totalPaid = fees.reduce((acc, fee) => acc + Number(fee.Deposit), 0);
    const remainingAmount = course.fees - totalPaid;

    if (payFeeDto.deposit <= 0) {
      throw new NotFoundException('Payment amount must be greater than zero');
    }

    if (payFeeDto.deposit > remainingAmount) {
      throw new NotFoundException('Payment amount exceeds remaining fee');
    }

    const fee = this.feeRepository.create({
      student,
      Deposit: payFeeDto.deposit,
      Remaining: remainingAmount - payFeeDto.deposit,
    });

    return this.feeRepository.save(fee);

  }
  async getFeesByStudentId(studentId: number): Promise<FeeSubmission[]> {
    const fees = await this.feeRepository.find({
      where: { student: { id: studentId } },
    });

    if (!fees.length) {
      throw new NotFoundException('No fee records found for this student');
    }

    return fees;
  }
}
