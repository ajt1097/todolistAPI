import {
  ArrayType,
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { TodolistEntity } from './todolist.entity';

@Entity()
export class ItemEntity {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  deletedAt: null | Date;

  @Property({ type: ArrayType })
  tags: string[] = [];

  @ManyToOne()
  list: IdentifiedReference<TodolistEntity>;
}
