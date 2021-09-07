import { Inject, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import {
  IItemRepository,
  ITEM_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/item.repository.interface';
import { ItemFactory } from '@src/domain/factory/item.factory';

@Injectable()
export class CreateItem {
  constructor(
    @Inject(ITEM_REPOSITORY_SYMBOL)
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute(id, data): Promise<void> {
    const uuid = v4();
    const item = ItemFactory.create(uuid, data.name, data.tags);
    await this.itemRepository.save(id, item);
  }
}
