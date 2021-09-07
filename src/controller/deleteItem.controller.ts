import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteItem } from '@src/application/usecase/deleteItem';

@Controller('todolist')
export class DeleteItemController {
  constructor(private readonly useCase: DeleteItem) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Delete item' })
  @Delete('item/:id')
  async removeItem(@Param('id') id: string) {
    await this.useCase.excute(id);
  }
}
