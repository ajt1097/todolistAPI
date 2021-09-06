import { wrap } from '@mikro-orm/core';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todolist } from '@src/todolist/entitiy/todolist.entity';
import { TodolistData } from '@src/todolist/dto/todolist.dto';
import { TodolistRepository } from '@src/todolist/repository/todolist.repository';
import { ItemRepository } from '@src/todolist/repository/item.repository';
import { Item } from '@src/todolist/entitiy/item.entity';

@Injectable()
export class TodolistService {
  constructor(private readonly todolistRepository: TodolistRepository) {}

  async findAll(): Promise<Todolist[]> {
    const todolist = await this.todolistRepository.findAll();
    return todolist.filter((list) => list.deletedAt === null);
  }

  async findList(id: number): Promise<Todolist> {
    const target = await this.todolistRepository.findOne({ id });

    if (!target || target.deletedAt !== null) throw new NotFoundException();
    return target;
  }

  async createList(data: TodolistData): Promise<Todolist> {
    const newTodoList = new Todolist(data.title, data.content);
    // console.log(newTodoList);
    // console.log(await validate(newTodoList));
    this.todolistRepository.persist(newTodoList);
    await this.todolistRepository.flush();

    return newTodoList;
  }

  async updateList(id: number, data: TodolistData): Promise<Todolist> {
    const target = await this.todolistRepository.findOne({ id });

    if (!target) throw new NotFoundException();

    wrap(target).assign(data);
    await this.todolistRepository.flush();

    return target;
  }

  async removeList(id: number) {
    const qb = await this.todolistRepository.createQueryBuilder();
    qb.update({ deletedAt: new Date() }).where({ id });

    await qb.execute();
    return 'remove';
  }
}
