import { Inject, Injectable } from '@nestjs/common';
import {
  IItemRepository,
  ITEM_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/item.repository.interface';

@Injectable()
export class DeleteItem {
  constructor(
    @Inject(ITEM_REPOSITORY_SYMBOL)
    private readonly itemRepository: IItemRepository,
  ) {}

  async excute(id): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
