import { wrap } from '@mikro-orm/core';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todolist } from './todolist.entity';
import { TodolistData } from './todolist.dto';
import { TodolistRepository } from './todolist.repository';
import { validate } from 'class-validator';
import { ItemRepository } from 'src/item/item.repository';

@Injectable()
export class TodolistService {
  constructor(
    private readonly todolistRepository: TodolistRepository,
    private readonly itemRepository: ItemRepository,
  ) {}

  async findList(title) {
    const target = await this.todolistRepository.findOne({ title }, ['list']);

    if (!target) throw new NotFoundException();

    return target;
  }

  async createList(data: TodolistData) {
    const list = await this.todolistRepository.findOne({ title: data.title });
    console.log(list);
    if (!!list) throw new ConflictException();

    const newTodoList = new Todolist(data.title, data.content);
    console.log(newTodoList);
    console.log(await validate(newTodoList));
    this.todolistRepository.persist(newTodoList);
    await this.todolistRepository.flush();

    return newTodoList;
  }

  async updateList(data: TodolistData) {
    const target = await this.todolistRepository.findOne({ title: data.title });

    if (!target) throw new NotFoundException();

    wrap(target).assign(data);
    await this.todolistRepository.flush();

    return target;
  }

  async removeList(title: string) {
    const target = await this.todolistRepository.findOne({ title }, ['list']);
    if (!target) throw new NotFoundException();

    const child = target.list.getItems(); // cascade: [Cascade.ALL]대체
    for (let i = 0; i < child.length; i++) {
      await this.itemRepository.remove(child[i]);
    }
    await this.itemRepository.flush();

    await this.todolistRepository.nativeDelete({ title });

    return 'remove';
  }
}
