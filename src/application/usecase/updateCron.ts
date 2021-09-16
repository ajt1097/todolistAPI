import { Inject, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class UpdateCron {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  async execute(cronId): Promise<void> {
    this.schedulerRegistry.deleteCronJob(cronId);
    // 시간 이나 내용을 다시 재설정해서 새로운 CronJob 생성

    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);

    const newCron = new CronJob(time, () => {
      console.log(
        `${cronId}의 내용을 수정해서 ${time}에 API 요청을 보냈습니다.`,
      );
      this.schedulerRegistry.deleteCronJob(String(cronId));
    });

    this.schedulerRegistry.addCronJob(cronId, newCron);
    newCron.start();
  }
}
