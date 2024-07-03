import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './ControlRealizado.service';
import { ControlRealizadoGateway } from './ControlRealizado.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlRealizadoEntity } from './Entity/ControlRealizado.entity';

@Module({
  providers: [ControlRealizadoGateway, ControlRealizadoService],
  imports: [TypeOrmModule.forFeature([ControlRealizadoEntity])],
  exports: [TypeOrmModule]
})
export class ControlRealizadoModule {}
