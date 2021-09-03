import { Injectable, NotFoundException } from '@nestjs/common';
import { TodolistRepository } from 'src/todolist/todolist.repository';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemService {
  constructor(
    private readonly todolistRepository: TodolistRepository,
    private readonly itemRepository: ItemRepository,
  ) {}
  async create(title: string, data: CreateItemDto) {
    const list = await this.todolistRepository.findOne({ title });
    console.log(list);
    const item = new Item(data.name, list, data.tags);
    console.log(item);

    await this.itemRepository.persistAndFlush(item);
    return item;
  }

  async findItems(title: string) {
    const todo = await this.todolistRepository.findOne({ title }, ['list']);
    console.log(todo.list);

    return todo.list;
  }

  async update(data: UpdateItemDto) {
    const { id, name, tags } = data;
    const item = await this.itemRepository.getReference(id);

    item.name = name;
    item.tags = tags;
    console.log(item);
    await this.itemRepository.flush();
    return item;
    // console.log(items);
  }

  async remove(title: string, id: number) {
    const items = await this.findItems(title);
    const item = await this.itemRepository.getReference(id);

    if (items.contains(item)) {
      items.remove(item);
      await this.itemRepository.removeAndFlush(item);
      return 'success';
    } else {
      throw new NotFoundException();
    }
  }
}
