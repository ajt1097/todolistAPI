import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Todolist {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsDate()
  createdAt = new Date();

  @IsDate()
  updatedAt = new Date();

  @IsOptional()
  @IsDate()
  deletedAt: null | Date;

  constructor(
    id: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  changeTitle(title: string): void {
    this.title = title;
    this.updatedAt = new Date();
  }

  changeContent(content: string): void {
    this.content = content;
    this.updatedAt = new Date();
  }

  delete(): void {
    this.deletedAt = new Date();
  }
}
