import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './controlrealizado.service';
import { ControlRealizadoResolver } from './controlrealizado.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlRealizado } from './entities/controlrealizado.entity';

@Module({
  providers: [ControlRealizadoResolver, ControlRealizadoService],
  imports: [TypeOrmModule.forFeature([ControlRealizado])],
  exports:  [TypeOrmModule]
})
export class ControlRealizadoModule {}
