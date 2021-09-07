import { Inject, Injectable } from '@nestjs/common';
import {
  IItemRepository,
  ITEM_REPOSITORY_SYMBOL,
} from '@src/domain/repositoryInterface/item.repository.interface';

@Injectable()
export class UpdateItem {
  constructor(
    @Inject(ITEM_REPOSITORY_SYMBOL)
    private readonly itemRepository: IItemRepository,
  ) {}

  async excute(id: string, data): Promise<void> {
    await this.itemRepository.update(id, data);
  }
}
