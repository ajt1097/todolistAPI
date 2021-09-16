import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ITEM_QUERY_SERVICE_SYMBOL } from './application/query/ItemQuery.service.interface';
import { TODOLIST_QUERY_SERVICE_SYMBOL } from './application/query/TodolistQuery.service.interface';
import { CreateCron } from './application/usecase/createCron';
import { CreateItem } from './application/usecase/createItem';
import { CreateTodolist } from './application/usecase/createTodolist';
import { DeleteCron } from './application/usecase/deleteCron';
import { DeleteItem } from './application/usecase/deleteItem';
import { DeleteTodolist } from './application/usecase/deleteTodolist';
import { ExistsCron } from './application/usecase/existsCron';
import { UpdateCron } from './application/usecase/updateCron';
import { UpdateItem } from './application/usecase/updateItem';
import { UpdateTodolist } from './application/usecase/updateTodolist';
import { CreateCronController } from './controller/createCron.controller';
import { CreateItemController } from './controller/createItem.controller';
import { CreateTodolistController } from './controller/createTodolist.controller';
import { DeleteCronController } from './controller/deleteCron.controller';
import { DeleteItemController } from './controller/deleteItem.controller';
import { DeleteTodolistController } from './controller/deleteTodolist.controller';
import { ExistsCronController } from './controller/existsCron.controller';
import { GetAllTodolistController } from './controller/getAllTodolist.controller';
import { GetItemsController } from './controller/getItems.controller';
import { GetOneTodolistController } from './controller/getOneTodolist.controller';
import { UpdateCronController } from './controller/updateCron.controller';
import { UpdateItemController } from './controller/updateItem.controller';
import { UpdateTodolistController } from './controller/updateTodolist.controller';
import { CRON_REPOSITORY_SYMBOL } from './domain/repositoryInterface/cron.repository.interface';
import { ITEM_REPOSITORY_SYMBOL } from './domain/repositoryInterface/item.repository.interface';
import { TODOLIST_REPOSITORY_SYMBOL } from './domain/repositoryInterface/todolist.repository.interface';
import { ItemEntityMapping } from './infra/mapping/itemEntity.mapping';
import { TodolistEntityMapping } from './infra/mapping/todolistEntity.mapping';
import { ItemQueryService } from './infra/query/ItemQuery.service';
import { TodolistQueryService } from './infra/query/TodolistQuery.service';
import { CronRepository } from './infra/repository/cron.repository';
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
  UpdateCronController,
  CreateCronController,
  DeleteCronController,
  ExistsCronController,
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
  CreateCron,
  UpdateCron,
  DeleteCron,
  ExistsCron,
];

const mappings = [ItemEntityMapping, TodolistEntityMapping];

const repositories = [
  { provide: ITEM_REPOSITORY_SYMBOL, useClass: ItemRepository },
  { provide: TODOLIST_REPOSITORY_SYMBOL, useClass: TodolistRepository },
  { provide: CRON_REPOSITORY_SYMBOL, useClass: CronRepository },
];

@Module({
  imports: [MikroOrmModule.forRoot(), ScheduleModule.forRoot()],
  controllers: [...controllers],
  providers: [...mappings, ...repositories, ...useCases, ...services],
})
export class AppModule {}
