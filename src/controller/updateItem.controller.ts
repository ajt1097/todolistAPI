import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateItem } from '@src/application/usecase/updateItem';

@Controller('todolist')
export class UpdateItemController {
  constructor(private readonly useCase: UpdateItem) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Update item' })
  @Put('item/:id')
  async updateItem(@Param('id') id: string, @Body() data) {
    await this.useCase.excute(id, data);
  }
}
