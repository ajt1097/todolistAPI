import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Item } from 'src/todolist/entitiy/item.entity';
import { ItemService } from './service/item.service';
import { TodolistController } from './todolist.controller';
import { Todolist } from './entitiy/todolist.entity';
import { TodolistService } from './service/todolist.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Todolist, Item] })],
  controllers: [TodolistController],
  providers: [TodolistService, ItemService],
})
export class TodolistModule {}
