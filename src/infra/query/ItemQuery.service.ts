import { Inject, Injectable } from '@nestjs/common';
import { IItemQueryService } from '@src/application/query/ItemQuery.service.interface';
import { Item } from '@src/domain/domain/item';
import {
  IItemRepository,
  ITEM_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/item.repository.interface';
import { ItemEntityMapping } from '../mapping/itemEntity.mapping';

@Injectable()
export class ItemQueryService implements IItemQueryService {
  constructor(
    @Inject(ITEM_REPOSITORY_SYMBOL)
    private readonly itemRepository: IItemRepository,
  ) {}

  async getAllItem(todolistId): Promise<Item[]> {
    const items = await this.itemRepository.find({ list: todolistId });
    return items.map((item) => ItemEntityMapping.toDomain(item));
  }

  async getItem(itemId): Promise<Item> {
    const item = await this.itemRepository.findOne({ id: itemId });
    return ItemEntityMapping.toDomain(item);
  }
}
