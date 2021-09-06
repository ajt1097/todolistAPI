import { EntityRepository } from '@mikro-orm/mysql';
import { TodolistEntity } from '@src/infra/entitiy/todolist.entity';

export const TODOLIST_REPOSITORY_SYMBOL = Symbol('TODOLIST_REPOSITORY_SYMBOL');

export interface ITodolistRepositroy extends EntityRepository<TodolistEntity> {}
