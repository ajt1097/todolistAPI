import { EntityRepository } from '@mikro-orm/knex';
import { CronEntity } from '@src/infra/entitiy/cron.entity';
import { Cron } from '../domain/cron';

export const CRON_REPOSITORY_SYMBOL = Symbol('CRON_REPOSITORY_SYMBOL');

export interface ICronRepository extends EntityRepository<CronEntity> {
  save(domain: Cron): Promise<void>;
  delete(domain: Cron): Promise<void>;
}
