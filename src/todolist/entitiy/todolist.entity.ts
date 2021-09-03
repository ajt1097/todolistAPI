import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Item } from './item.entity';

@Entity()
export class Todolist {
  @PrimaryKey()
  id: number;

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

  @OneToMany(() => Item, (item) => item.list)
  items = new Collection<Item>(this);

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.deletedAt = null;
  }
}
