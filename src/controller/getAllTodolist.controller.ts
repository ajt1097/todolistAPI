import { Controller, Get, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ITodolistQueryService,
  TODOLIST_QUERY_SERVICE_SYMBOL,
} from '@src/application/query/TodolistQuery.service.interface';

@Controller('todolist')
export class GetAllTodolistController {
  constructor(
    @Inject(TODOLIST_QUERY_SERVICE_SYMBOL)
    private readonly queryService: ITodolistQueryService,
  ) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get All list' })
  @Get()
  async getList() {
    return this.queryService.getAllTodolist();
  }
}
