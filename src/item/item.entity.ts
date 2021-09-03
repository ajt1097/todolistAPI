import {
  ArrayType,
  Cascade,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Todolist } from '../todolist/todolist.entity';

@Entity()
export class Item {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property({ type: ArrayType })
  tags: string[] = [];

  @ManyToOne()
  list: Todolist;

  constructor(name: string, list: Todolist, tags: string[]) {
    this.name = name;
    this.tags = tags;
    this.list = list;
  }
}
