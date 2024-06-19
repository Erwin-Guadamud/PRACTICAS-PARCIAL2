import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { SignovitalModule } from './signovital/signovital.module';
import { ControlrealizadoModule } from './controlrealizado/controlrealizado.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PacienteModule, SignovitalModule, ControlrealizadoModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [], 
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
