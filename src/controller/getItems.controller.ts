import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class GetItemsController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get items in todolist' })
  @Get('item/:id')
  async getItems() {}
}
