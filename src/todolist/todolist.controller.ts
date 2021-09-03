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
import { ItemDto } from './dto/create-item.dto';
import { TodolistData } from './dto/todolist.dto';
import { Item } from './entitiy/item.entity';
import { Todolist } from './entitiy/todolist.entity';
import { ItemService } from './service/item.service';
import { TodolistService } from './service/todolist.service';

@ApiTags('To Do List')
@Controller('todolist')
export class TodolistController {
  constructor(
    private readonly todolistService: TodolistService,
    private readonly itemService: ItemService,
  ) {}
  @ApiOperation({ summary: 'Get All list' })
  @Get()
  async getAllList(): Promise<Todolist[]> {
    return this.todolistService.findAll();
  }

  @ApiOperation({ summary: 'Get target list' })
  @Get(':id')
  async getList(@Param('id') id: number): Promise<Todolist> {
    return this.todolistService.findList(id);
  }

  @ApiOperation({ summary: 'Create List' })
  @Post()
  async postList(@Body() list: TodolistData): Promise<Todolist> {
    return this.todolistService.createList(list);
  }

  @ApiOperation({ summary: 'Update List' })
  @Put(':id')
  async putList(
    @Param('id') id: number,
    @Body() list: TodolistData,
  ): Promise<Todolist> {
    return this.todolistService.updateList(id, list);
  }

  @ApiOperation({ summary: 'Remove List' })
  @Delete(':id')
  async deleteList(@Param('id') id: number) {
    return this.todolistService.removeList(id);
  }

  @ApiOperation({ summary: 'Get items in todolist' })
  @Get('item/:id')
  async getItems(@Param('id') id: number) {
    return this.itemService.getItems(id);
  }

  @ApiOperation({ summary: 'Add item' })
  @Post('item/:id')
  async addItem(@Param('id') id: number, @Body() item: ItemDto): Promise<Item> {
    return this.itemService.createItem(id, item);
  }

  @ApiOperation({ summary: 'Update item' })
  @Put('item/:id')
  async updateItem(
    @Param('id') id: number,
    @Body() item: ItemDto,
  ): Promise<Item> {
    return this.itemService.update(id, item);
  }

  @ApiOperation({ summary: 'Delete item' })
  @Delete('item/:id')
  async removeItem(@Param('id') id: number) {
    return this.itemService.remove(id);
  }
}
