import { ApiProperty } from '@nestjs/swagger';

export class TodolistData {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public content: string;
}
