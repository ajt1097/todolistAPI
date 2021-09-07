import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItem } from '@src/application/usecase/createItem';

@Controller('todolist')
export class CreateItemController {
  constructor(private readonly useCase: CreateItem) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Add item' })
  @Post('item/:id')
  async addItem(@Body() data, @Param('id') todolistId: string) {
    await this.useCase.execute(todolistId, data);
  }
}
