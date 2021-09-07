import { Repository, wrap } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { Todolist } from '@src/domain/domain/todolist';
import { ITodolistRepositroy } from '@src/domain/repositoryInterface/todolist.repository.interface';
import { TodolistEntity } from '../entitiy/todolist.entity';
import { TodolistEntityMapping } from '../mapping/todolistEntity.mapping';

@Repository(TodolistEntity)
export class TodolistRepository
  extends EntityRepository<TodolistEntity>
  implements ITodolistRepositroy
{
  async save(domain: Todolist): Promise<void> {
    const entity = TodolistEntityMapping.toEntity(domain, new TodolistEntity());
    this.persistAndFlush(entity);
  }

  async update(id: string, data): Promise<void> {
    const target = await this.findOne({ id });
    wrap(target).assign(data);
    await this.flush();
  }

  async delete(id: string): Promise<void> {
    const qb = await this.createQueryBuilder();
    qb.update({ deletedAt: new Date() }).where({ id });

    await qb.execute();
  }
}
