import { Cron } from '@src/domain/domain/cron';
import { CronFactory } from '@src/domain/factory/cron.factory';
import { CronEntity } from '../entitiy/cron.entity';

export class CronEntityMapping {
  static toDomain(entity: CronEntity): Cron {
    return CronFactory.reconstitute(
      entity.id,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
    );
  }

  static toEntity(domain: Cron, entity: CronEntity): CronEntity {
    entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.deletedAt = domain.deletedAt;
    return entity;
  }
}
