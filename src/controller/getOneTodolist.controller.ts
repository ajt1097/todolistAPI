import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class GetOneTodolistController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get target list' })
  @Get(':id')
  async getList() {}
}
