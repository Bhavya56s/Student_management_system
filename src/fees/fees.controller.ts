import { Controller, Post, Param, Body, Get, UseGuards } from '@nestjs/common';
import { FeeService } from './fees.services';
import { PayfeeDto } from './dto/fees.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiSecurity('JWT-Auth')
@ApiTags('Fees Submission')
@UseGuards(AuthGuard('jwt'))

@Controller('fees')
export class FeeController {
  constructor(private readonly feeService: FeeService) {}

  @Post('pay/:studentId')
  async payFee(@Param('studentId') studentId: number, @Body() payFeeDto: PayfeeDto) {
      return await this.feeService.payFee(studentId, payFeeDto);
 }
 @Get('student/:studentId')
 async getFeesByStudentId(@Param('studentId') studentId: number) {
   return this.feeService.getFeesByStudentId(studentId);
 }
}
