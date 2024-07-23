import { Module } from '@nestjs/common';
import { ObraDeArteService } from './obradearte.service';
import { ObraDeArteGateway } from './obradearte.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObraDeArte } from './entities/obradearte.entity';

@Module({
  providers: [ObraDeArteService, ObraDeArteGateway],
  imports: [TypeOrmModule.forFeature([ObraDeArte])],
  exports: [ObraDeArteService, ObraDeArteGateway, TypeOrmModule],
})
export class ObraDeArteModule {}
