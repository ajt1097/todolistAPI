import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Cron {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsDate()
  deletedAt: null | Date;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  update(): void {
    this.updatedAt = new Date();
  }

  delete(): void {
    this.updatedAt = new Date();
  }
}
