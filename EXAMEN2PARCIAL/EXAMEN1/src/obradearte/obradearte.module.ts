import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObraDeArteService } from './obradearte.service';
import { ObraDeArteController } from './obradearte.controller';
import { ObraDeArte } from './entities/obradearte.entity';

@Module({
  controllers: [ObraDeArteController],
  providers: [ObraDeArteService],
  imports: [TypeOrmModule.forFeature([ObraDeArte])],
  exports: [TypeOrmModule],
})
export class ObraDeArteModule {}
