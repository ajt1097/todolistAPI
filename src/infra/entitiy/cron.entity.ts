import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class CronEntity {
  @PrimaryKey()
  id: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  deletedAt: null | Date;
}
