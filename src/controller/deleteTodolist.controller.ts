import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteTodolist } from '@src/application/usecase/deleteTodolist';

@Controller('todolist')
export class DeleteTodolistController {
  constructor(private readonly useCase: DeleteTodolist) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Remove List' })
  @Delete(':id')
  async deleteList(@Param('id') id: string) {
    await this.useCase.execute(id);
  }
}
