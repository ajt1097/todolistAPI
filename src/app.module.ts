import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CreateItemController } from './controller/createItem.controller';
import { CreateTodolistController } from './controller/createTodolist.controller';
import { DeleteItemController } from './controller/deleteItem.controller';
import { DeleteTodolistController } from './controller/deleteTodolist.controller';
import { GetAllTodolistController } from './controller/getAllTodolist.controller';
import { GetItemsController } from './controller/getItems.controller';
import { GetOneTodolistController } from './controller/getOneTodolist.controller';
import { UpdateItemController } from './controller/updateItem.controller';
import { UpdateTodolistController } from './controller/updateTodolist.controller';
import { ITEM_REPOSITORY_SYMBOL } from './domain/repositoryInterface/item.repository.interface';
import { TODOLIST_REPOSITORY_SYMBOL } from './domain/repositoryInterface/todolist.repository.interface';
import { ItemEntityMapping } from './infra/mapping/itemEntity.mapping';
import { TodolistEntityMapping } from './infra/mapping/todolistEntity.mapping';
import { ItemRepository } from './infra/repository/item.repository';
import { TodolistRepository } from './infra/repository/todolist.repository';

const controllers = [
  CreateItemController,
  CreateTodolistController,
  DeleteItemController,
  DeleteTodolistController,
  GetAllTodolistController,
  GetOneTodolistController,
  GetItemsController,
  UpdateItemController,
  UpdateTodolistController,
];

const mappings = [ItemEntityMapping, TodolistEntityMapping];

const repositories = [
  { provide: ITEM_REPOSITORY_SYMBOL, useClass: ItemRepository },
  { provide: TODOLIST_REPOSITORY_SYMBOL, useClass: TodolistRepository },
];

@Module({
  imports: [MikroOrmModule.forRoot()],
  controllers: [...controllers],
  providers: [...mappings, ...repositories],
})
export class AppModule {}
