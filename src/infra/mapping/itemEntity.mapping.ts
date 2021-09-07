import { Item } from '@src/domain/domain/item';
import { ItemFactory } from '@src/domain/factory/item.factory';
import { ItemEntity } from '../entitiy/item.entity';

export class ItemEntityMapping {
  static toDomain(entity: ItemEntity): Item {
    return ItemFactory.reconstitute(
      entity.id,
      entity.name,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
      entity.tags,
    );
  }

  static toEntity(domain: Item, entity: ItemEntity): ItemEntity {
    entity.id = domain.id;
    entity.name = domain.name;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.deletedAt = domain.deletedAt;
    entity.tags = domain.tags;
    return entity;
  }
}
