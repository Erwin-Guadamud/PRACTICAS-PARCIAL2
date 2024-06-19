import { Module } from '@nestjs/common';
import { SignovitalService } from './signovital.service';
import { SignovitalController } from './signovital.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignoVital } from './entities/signovital.entity';

@Module({
  controllers: [SignovitalController],
  imports: [
    TypeOrmModule.forFeature([ SignoVital ]),
  ],
  exports: [TypeOrmModule],
  providers: [SignovitalService],
})
export class SignovitalModule {}
