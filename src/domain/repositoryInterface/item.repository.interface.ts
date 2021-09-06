import { EntityRepository } from '@mikro-orm/knex';
import { ItemEntity } from '@src/infra/entitiy/item.entity';

export const ITEM_REPOSITORY_SYMBOL = Symbol('ITEM_REPOSITORY_SYMBOL');

export interface IItemRepository extends EntityRepository<ItemEntity> {}
