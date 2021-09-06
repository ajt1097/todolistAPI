import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class Item {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsDate()
  deletedAt: null | Date;

  @IsArray()
  tags: string[] = [];

  constructor(
    id: string,
    name: string,
    createdAt: Date,
    updateAt: Date,
    deletedAt: Date | null,
    tags: string[],
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
    this.deletedAt = deletedAt;
    this.tags = tags;
  }

  changeName(name: string): void {
    this.name = name;
    this.updatedAt = new Date();
  }

  delete(): void {
    this.deletedAt = new Date();
  }
}
