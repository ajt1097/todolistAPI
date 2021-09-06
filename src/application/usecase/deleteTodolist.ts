import { Inject, Injectable } from '@nestjs/common';
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

  async execute(id: string) {
    const qb = await this.todolistRepository.createQueryBuilder();
    qb.update({ deletedAt: new Date() }).where({ id });

    await qb.execute();
  }
}
