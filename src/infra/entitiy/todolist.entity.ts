import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ItemEntity } from './item.entity';

@Entity()
export class TodolistEntity {
  @PrimaryKey()
  id: string;

  @Property()
  title: string;

  @Property()
  content: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  deletedAt: null | Date;

  @OneToMany(() => ItemEntity, (item) => item.list)
  items = new Collection<ItemEntity>(this);
}
