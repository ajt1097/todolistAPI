import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  IItemQueryService,
  ITEM_QUERY_SERVICE_SYMBOL,
} from '@src/application/query/ItemQuery.service.interface';

@Controller('todolist')
export class GetItemsController {
  constructor(
    @Inject(ITEM_QUERY_SERVICE_SYMBOL)
    private readonly queryService: IItemQueryService,
  ) {}
  @ApiTags('To Do List')
  @ApiOperation({ summary: 'Get items in todolist' })
  @Get('item/:id')
  async getItems(@Param('id') todolistId: string) {
    return this.queryService.getAllItem(todolistId);
  }
}
