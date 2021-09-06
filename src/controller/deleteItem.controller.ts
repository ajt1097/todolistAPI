import { Controller, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class DeleteItemController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Delete item' })
  @Delete('item/:id')
  async removeItem() {}
}
