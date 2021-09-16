import { Cron } from '../domain/cron';

export class CronFactory {
  static create(id: string): Cron {
    return new Cron(id, new Date(), new Date(), null);
  }

  static reconstitute(
    id: string,
    createdAt: Date,
    updateAt: Date,
    deletedAt: Date | null,
  ): Cron {
    return new Cron(id, createdAt, updateAt, deletedAt);
  }
}
