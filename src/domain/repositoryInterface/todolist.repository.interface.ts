import { EntityRepository } from '@mikro-orm/mysql';
import { TodolistEntity } from '@src/infra/entitiy/todolist.entity';
import { Todolist } from '../domain/todolist';

export const TODOLIST_REPOSITORY_SYMBOL = Symbol('TODOLIST_REPOSITORY_SYMBOL');

export interface ITodolistRepositroy extends EntityRepository<TodolistEntity> {
  save(domain: Todolist): Promise<void>;
  update(id: string, data): Promise<void>;
  delete(id: string): Promise<void>;
}
