import { Controller, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class UpdateTodolistController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Update List' })
  @Put(':id')
  async putList() {}
}
