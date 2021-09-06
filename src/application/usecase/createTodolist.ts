import { Inject, Injectable } from '@nestjs/common';
import { TodolistFactory } from '@src/domain/factory/todolist.factory';
import { v4 } from 'uuid';
import {
  ITodolistRepositroy,
  TODOLIST_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/todolist.repository.interface';
import { TodolistEntityMapping } from '@src/infra/mapping/todolistEntity.mapping';
import { TodolistEntity } from '@src/infra/entitiy/todolist.entity';

@Injectable()
export class CreateTodolist {
  constructor(
    @Inject(TODOLIST_REPOSITORY_SYMBOL)
    private readonly todolistRepository: ITodolistRepositroy,
  ) {}

  async execute(data): Promise<void> {
    const uuid = v4();
    const list = TodolistFactory.create(uuid, data.title, data.content);
    const entitiy = TodolistEntityMapping.toEntity(list, new TodolistEntity());
    // 이렇게 해도 되는건가...? 도메인 생성만 new 로 안하면 되는건가요...?
    await this.todolistRepository.persistAndFlush(entitiy);
  }
}
