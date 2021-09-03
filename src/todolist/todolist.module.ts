import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Item } from 'src/item/item.entity';
import { TodolistController } from './todolist.controller';
import { Todolist } from './todolist.entity';
import { TodolistService } from './todolist.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Todolist, Item] })],
  controllers: [TodolistController],
  providers: [TodolistService],
  exports: [TodolistService],
})
export class TodolistModule {}
