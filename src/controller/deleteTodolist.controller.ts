import { Controller, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('todolist')
export class DeleteTodolistController {
  constructor() {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Remove List' })
  @Delete(':id')
  async deleteList() {}
}
