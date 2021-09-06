import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class CreateTodolistController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Create List' })
  @Post()
  async postList() {}
}
