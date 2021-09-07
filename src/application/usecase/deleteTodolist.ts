import { Inject, Injectable } from '@nestjs/common';
import {
  ITodolistRepositroy,
  TODOLIST_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/todolist.repository.interface';

@Injectable()
export class DeleteTodolist {
  constructor(
    @Inject(TODOLIST_REPOSITORY_SYMBOL)
    private readonly todolistRepository: ITodolistRepositroy,
  ) {}

  async execute(id: string) {
    await this.todolistRepository.delete(id);
  }
}
