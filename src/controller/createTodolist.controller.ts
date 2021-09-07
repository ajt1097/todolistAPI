import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTodolist } from '@src/application/usecase/createTodolist';

@Controller('todolist')
export class CreateTodolistController {
  constructor(private readonly useCase: CreateTodolist) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Create List' })
  @Post()
  async postList(@Body() data) {
    await this.useCase.execute(data);
  }
}
