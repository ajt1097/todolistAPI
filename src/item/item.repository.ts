import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { Item } from './item.entity';

@Repository(Item)
export class ItemRepository extends EntityRepository<Item> {}
