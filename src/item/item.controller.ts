import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateItemDto } from './dto/update-item.dto';

@ApiTags('Item')
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @ApiOperation({ summary: 'Create item' })
  @Post(':title')
  create(@Param('title') title: string, @Body() createItemDto: CreateItemDto) {
    return this.itemService.create(title, createItemDto);
  }

  @ApiOperation({ summary: 'Get items in Title' })
  @Get(':title')
  findAll(@Param('title') title: string) {
    return this.itemService.findItems(title);
  }

  @ApiOperation({ summary: 'Update item' })
  @Put()
  update(@Body() data: UpdateItemDto) {
    return this.itemService.update(data);
  }

  @ApiOperation({ summary: 'Remove item' })
  @Delete(':title/:id')
  remove(@Param('title') title: string, @Param('id') id: number) {
    return this.itemService.remove(title, id);
  }
}
