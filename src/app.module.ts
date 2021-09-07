import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ITEM_QUERY_SERVICE_SYMBOL } from './application/query/ItemQuery.service.interface';
import { TODOLIST_QUERY_SERVICE_SYMBOL } from './application/query/TodolistQuery.service.interface';
import { CreateItem } from './application/usecase/createItem';
import { CreateTodolist } from './application/usecase/createTodolist';
import { DeleteItem } from './application/usecase/deleteItem';
import { DeleteTodolist } from './application/usecase/deleteTodolist';
import { UpdateItem } from './application/usecase/updateItem';
import { UpdateTodolist } from './application/usecase/updateTodolist';
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
import { ItemQueryService } from './infra/query/ItemQuery.service';
import { TodolistQueryService } from './infra/query/TodolistQuery.service';
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

const services = [
  { provide: TODOLIST_QUERY_SERVICE_SYMBOL, useClass: TodolistQueryService },
  { provide: ITEM_QUERY_SERVICE_SYMBOL, useClass: ItemQueryService },
];

const useCases = [
  CreateTodolist,
  DeleteTodolist,
  UpdateTodolist,
  CreateItem,
  UpdateItem,
  DeleteItem,
];

const mappings = [ItemEntityMapping, TodolistEntityMapping];

const repositories = [
  { provide: ITEM_REPOSITORY_SYMBOL, useClass: ItemRepository },
  { provide: TODOLIST_REPOSITORY_SYMBOL, useClass: TodolistRepository },
];

@Module({
  imports: [MikroOrmModule.forRoot()],
  controllers: [...controllers],
  providers: [...mappings, ...repositories, ...useCases, ...services],
})
export class AppModule {}
