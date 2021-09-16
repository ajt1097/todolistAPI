import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/knex';
import { Cron } from '@src/domain/domain/cron';
import { ICronRepository } from '@src/domain/repositoryInterface/cron.repository.interface';
import { CronEntity } from '../entitiy/cron.entity';
import { CronEntityMapping } from '../mapping/cronEntity.mapping';

@Repository(CronEntity)
export class CronRepository
  extends EntityRepository<CronEntity>
  implements ICronRepository
{
  async save(domain: Cron): Promise<void> {
    const target = await this.findOne({ id: domain.id });
    const entityInDB = target || new CronEntity();
    const entity = CronEntityMapping.toEntity(domain, entityInDB);
    this.persistAndFlush(entity);
  }

  async delete(domain: Cron): Promise<void> {
    domain.delete();
    this.save(domain);
  }
}
