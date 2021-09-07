import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateTodolist } from '@src/application/usecase/updateTodolist';

@Controller('todolist')
export class UpdateTodolistController {
  constructor(private readonly useCase: UpdateTodolist) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Update List' })
  @Put(':id')
  async putList(@Param('id') id, @Body() data) {
    await this.useCase.execute(id, data);
  }
}
