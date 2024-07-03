import { Module } from '@nestjs/common';
import { ControlRealizadoModule } from './controlrealizado/controlrealizado.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ControlRealizadoModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
})
export class AppModule { }