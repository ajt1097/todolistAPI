import { wrap } from '@mikro-orm/core';
import { Inject, Injectable } from '@nestjs/common';
import {
  ITodolistRepositroy,
  TODOLIST_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/todolist.repository.interface';

@Injectable()
export class UpdateTodolist {
  constructor(
    @Inject(TODOLIST_REPOSITORY_SYMBOL)
    private readonly todolistRepository: ITodolistRepositroy,
  ) {}

  async execute(id: string, data): Promise<void> {
    await this.todolistRepository.update(id, data);
  }
}
