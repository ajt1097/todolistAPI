import { EntityRepository } from '@mikro-orm/knex';
import { ItemEntity } from '@src/infra/entitiy/item.entity';
import { Item } from '../domain/item';

export const ITEM_REPOSITORY_SYMBOL = Symbol('ITEM_REPOSITORY_SYMBOL');

export interface IItemRepository extends EntityRepository<ItemEntity> {
  save(id, item: Item): Promise<void>;
  update(id: string, data): Promise<void>;
  delete(itemId: string): Promise<void>;
}
