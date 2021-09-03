import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodolistData } from './todolist.dto';
import { TodolistService } from './todolist.service';

@ApiTags('To Do List')
@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @ApiOperation({ summary: 'Get List' })
  @Get(':title')
  async getList(@Param('title') title: string) {
    return this.todolistService.findList(title);
  }

  @ApiOperation({ summary: 'Create List' })
  @Post()
  async postList(@Body() list: TodolistData) {
    return this.todolistService.createList(list);
  }

  @ApiOperation({ summary: 'Update List' })
  @Put()
  async putList(@Body() list: TodolistData) {
    return this.todolistService.updateList(list);
  }

  @ApiOperation({ summary: 'Remove List' })
  @Delete(':title')
  async deleteList(@Param('title') title: string) {
    console.log(title);
    return this.todolistService.removeList(title);
  }
}
