import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { IItemRepository } from '@src/domain/repositoryInterface/item.repository.interface';
import { ItemEntity } from '../entitiy/item.entity';

@Repository(ItemEntity)
export class ItemRepository
  extends EntityRepository<ItemEntity>
  implements IItemRepository {}
