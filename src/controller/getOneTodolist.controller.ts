import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ITodolistQueryService,
  TODOLIST_QUERY_SERVICE_SYMBOL,
} from '@src/application/query/TodolistQuery.service.interface';

@Controller('todolist')
export class GetOneTodolistController {
  constructor(
    @Inject(TODOLIST_QUERY_SERVICE_SYMBOL)
    private readonly queryService: ITodolistQueryService,
  ) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get target list' })
  @Get(':id')
  async getList(@Param('id') id) {
    return this.queryService.getTodolist(id);
  }
}
