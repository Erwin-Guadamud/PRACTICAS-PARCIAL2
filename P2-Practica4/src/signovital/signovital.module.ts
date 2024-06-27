import { Module } from '@nestjs/common';
import { SignoVitalService } from './signovital.service';
import { SignoVitalResolver } from './signovital.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignoVital } from './entities/signovital.entity';

@Module({
  providers: [SignoVitalResolver, SignoVitalService],
  imports: [TypeOrmModule.forFeature([SignoVital])],
  exports:  [TypeOrmModule]
})
export class SignovitalModule {}
