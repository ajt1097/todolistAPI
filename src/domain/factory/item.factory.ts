import { Item } from '../domain/item';

export class ItemFactory {
  static create(id: string, name: string, tags: string[]): Item {
    return new Item(id, name, new Date(), new Date(), null, tags);
  }

  static reconstitute(
    id: string,
    name: string,
    createdAt: Date,
    updateAt: Date,
    deletedAt: Date | null,
    tags: string[],
  ): Item {
    return new Item(id, name, createdAt, updateAt, deletedAt, tags);
  }
}
