import { Inject, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import {
  CRON_REPOSITORY_SYMBOL,
  ICronRepository,
} from '@src/domain/repositoryInterface/cron.repository.interface';

@Injectable()
export class ExistsCron {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  execute(cronId: string) {
    const job = this.schedulerRegistry.getCronJobs();
    console.log(job);
  }
}
