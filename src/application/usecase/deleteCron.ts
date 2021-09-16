import { Inject, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class DeleteCron {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  execute(cronId: string): void {
    this.schedulerRegistry.deleteCronJob(cronId);
  }
}
