import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class CreateItemController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Add item' })
  @Post('item/:id')
  async addItem() {}
}
