import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ObraDeArteModule } from './obradearte/obradearte.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ ObraDeArteModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
