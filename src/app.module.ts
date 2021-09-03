import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';

@Module({
  imports: [MikroOrmModule.forRoot(), TodolistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
