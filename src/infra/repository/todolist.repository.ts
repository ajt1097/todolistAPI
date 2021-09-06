import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { ITodolistRepositroy } from '@src/domain/repositoryInterface/todolist.repository.interface';
import { TodolistEntity } from '../entitiy/todolist.entity';

@Repository(TodolistEntity)
export class TodolistRepository
  extends EntityRepository<TodolistEntity>
  implements ITodolistRepositroy {}
