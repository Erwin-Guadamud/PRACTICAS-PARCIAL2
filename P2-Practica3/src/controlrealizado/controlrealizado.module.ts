import { Module } from '@nestjs/common';
import { ControlrealizadoService } from './controlrealizado.service';
import { ControlrealizadoController } from './controlrealizado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlRealizado } from './entities/controlrealizado.entity';

@Module({
  controllers: [ControlrealizadoController],
  imports: [
    TypeOrmModule.forFeature([ ControlRealizado ]),
  ],
  exports: [TypeOrmModule],
  providers: [ControlrealizadoService],
})
export class ControlrealizadoModule {}
