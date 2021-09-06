import { Controller, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class UpdateItemController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Update item' })
  @Put('item/:id')
  async updateItem() {}
}
