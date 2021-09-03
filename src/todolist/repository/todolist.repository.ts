import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { Todolist } from '../entitiy/todolist.entity';

@Repository(Todolist)
export class TodolistRepository extends EntityRepository<Todolist> {}