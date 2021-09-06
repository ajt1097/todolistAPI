import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class GetAllTodolistController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get All list' })
  @Get()
  async getList() {}
}
