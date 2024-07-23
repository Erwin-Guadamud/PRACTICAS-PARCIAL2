import { Module } from '@nestjs/common';
import { ObraDeArteResolver } from './obradearte.resolver';
import { ObraDeArteService } from './obradearte.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObraDeArte } from './entities/obradearte.entity';

@Module({
  providers: [ObraDeArteResolver, ObraDeArteService],
  imports: [TypeOrmModule.forFeature([ObraDeArte])],
  exports: [TypeOrmModule]
})
export class ObraDeArteModule {}
