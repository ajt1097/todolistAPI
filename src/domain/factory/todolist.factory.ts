import { Todolist } from '../domain/todolist';

export class TodolistFactory {
  static create(id: string, title: string, content: string): Todolist {
    return new Todolist(id, title, content, new Date(), new Date(), null);
  }
  static reconstitute(
    id: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ): Todolist {
    return new Todolist(id, title, content, createdAt, updatedAt, deletedAt);
  }
}
