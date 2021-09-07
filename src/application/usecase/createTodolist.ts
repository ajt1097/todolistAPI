import { Inject, Injectable } from '@nestjs/common';
import { TodolistFactory } from '@src/domain/factory/todolist.factory';
import { v4 } from 'uuid';
import {
  ITodolistRepositroy,
  TODOLIST_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/todolist.repository.interface';

@Injectable()
export class CreateTodolist {
  constructor(
    @Inject(TODOLIST_REPOSITORY_SYMBOL)
    private readonly todolistRepository: ITodolistRepositroy,
  ) {}

  async execute(data): Promise<void> {
    const uuid = v4();
    const todolist = TodolistFactory.create(uuid, data.title, data.content);
    await this.todolistRepository.save(todolist);
  }
}
