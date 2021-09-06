import { Todolist } from '@src/domain/domain/todolist';
import { TodolistFactory } from '@src/domain/factory/todolist.factory';
import { TodolistEntity } from '../entitiy/todolist.entity';

export class TodolistEntityMapping {
  static toDomain(entity: TodolistEntity): Todolist {
    return TodolistFactory.reconstitute(
      entity.id,
      entity.title,
      entity.content,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
    );
  }

  static toEntity(domain: Todolist, entity: TodolistEntity): TodolistEntity {
    entity.id = domain.id;
    entity.title = domain.title;
    entity.content = domain.content;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.deletedAt = domain.deletedAt;
    return entity;
  }
}
