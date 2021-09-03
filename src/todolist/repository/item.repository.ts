import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { Item } from '../entitiy/item.entity';

@Repository(Item)
export class ItemRepository extends EntityRepository<Item> {}
