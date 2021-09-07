import { Item } from '@src/domain/domain/item';

export const ITEM_QUERY_SERVICE_SYMBOL = Symbol('ITEM_QUERY_SERVICE_SYMBOL');

export interface IItemQueryService {
  getAllItem(todolistId): Promise<Item[]>;
  getItem(itemId): Promise<Item>;
}
