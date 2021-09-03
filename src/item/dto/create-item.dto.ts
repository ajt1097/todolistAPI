import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly tags: string[];
}
