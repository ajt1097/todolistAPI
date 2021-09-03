import { wrap } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TodolistRepository } from '@src/todolist/repository/todolist.repository';
import { ItemDto } from '@src/todolist/dto/create-item.dto';
import { Item } from '@src/todolist/entitiy/item.entity';
import { ItemRepository } from '@src/todolist/repository/item.repository';

@Injectable()
export class ItemService {
  constructor(
    private readonly todolistRepository: TodolistRepository,
    private readonly itemRepository: ItemRepository,
  ) {}

  async getItems(id: number) {
    const items = await this.itemRepository.find({ list: id });
    return items.filter((item) => item.deletedAt === null);
  }

  async createItem(id: number, data: ItemDto): Promise<Item> {
    const list = await this.todolistRepository.findOne({ id });
    if (list.deletedAt) throw new NotFoundException();
    // console.log(list);
    const item = new Item(data.name, list, data.tags);
    // console.log(item);
    await this.itemRepository.persistAndFlush(item);
    return item;
  }

  async update(id: number, data: ItemDto): Promise<Item> {
    const item = await this.itemRepository.findOne({ id });

    if (!item) throw new NotFoundException();

    wrap(item).assign(data);
    await this.itemRepository.flush();
    return item;
    // console.log(items);
  }

  async remove(id: number) {
    const qb = await this.itemRepository.createQueryBuilder();
    qb.update({ deletedAt: new Date() }).where({ id });

    await qb.execute();
    return 'remove';
  }
}
