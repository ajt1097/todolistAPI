import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Todolist } from 'src/todolist/todolist.entity';
import { Item } from './item.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Todolist, Item] })],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
