import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly tags: string[];
}
