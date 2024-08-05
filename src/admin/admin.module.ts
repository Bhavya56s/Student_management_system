import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { Admins } from './entity/admin.entity';
import { AdminServices } from './admin.services';


@Module({
  imports: [TypeOrmModule.forFeature([Admins])],
  controllers: [AdminController],
  providers: [AdminServices],
  exports: [TypeOrmModule],
})
export class AdminModule {}