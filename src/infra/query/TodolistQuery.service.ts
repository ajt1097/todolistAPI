import { Inject, Injectable } from '@nestjs/common';
import { ITodolistQueryService } from '@src/application/query/TodolistQuery.service.interface';
import { Todolist } from '@src/domain/domain/todolist';
import {
  ITodolistRepositroy,
  TODOLIST_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/todolist.repository.interface';
import { TodolistEntityMapping } from '../mapping/todolistEntity.mapping';

@Injectable()
export class TodolistQueryService implements ITodolistQueryService {
  constructor(
    @Inject(TODOLIST_REPOSITORY_SYMBOL)
    private readonly todolistRepository: ITodolistRepositroy,
  ) {}

  async getAllTodolist(): Promise<Todolist[]> {
    const todolists = await this.todolistRepository.findAll();
    return todolists.map((list) => TodolistEntityMapping.toDomain(list));
  }

  async getTodolist(id: string): Promise<Todolist> {
    const list = await this.todolistRepository.findOne({ id });
    return TodolistEntityMapping.toDomain(list);
  }
}
