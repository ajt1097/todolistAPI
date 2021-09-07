import { Repository, wrap } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { Item } from '@src/domain/domain/item';
import { IItemRepository } from '@src/domain/repositoryInterface/item.repository.interface';
import { ItemEntity } from '../entitiy/item.entity';
import { ItemEntityMapping } from '../mapping/itemEntity.mapping';

@Repository(ItemEntity)
export class ItemRepository
  extends EntityRepository<ItemEntity>
  implements IItemRepository
{
  async save(todolistId, item: Item): Promise<void> {
    const entity = ItemEntityMapping.toEntity(item, new ItemEntity());
    entity.list = todolistId;
    this.persistAndFlush(entity);
  }
  async update(itemId: string, data): Promise<void> {
    const item = await this.findOne({ id: itemId });
    wrap(item).assign(data);
    await this.flush();
  }
  async delete(itemId: string): Promise<void> {
    const qb = await this.createQueryBuilder();
    qb.update({ deletedAt: new Date() }).where({ id: itemId });

    await qb.execute();
  }
}
