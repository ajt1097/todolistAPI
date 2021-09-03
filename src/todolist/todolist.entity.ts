import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Item } from '../item/item.entity';

@Entity()
export class Todolist {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  content: string;

  @OneToMany({
    entity: () => Item,
    mappedBy: 'list',
  })
  list = new Collection<Item>(this);

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
