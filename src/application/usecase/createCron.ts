import { Inject, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { SchedulerRegistry } from '@nestjs/schedule';
import {
  CRON_REPOSITORY_SYMBOL,
  ICronRepository,
} from '@src/domain/repositoryInterface/cron.repository.interface';
import { CronJob } from 'cron';

@Injectable()
export class CreateCron {
  id: number;
  constructor(
    @Inject(CRON_REPOSITORY_SYMBOL)
    private readonly cronRepository: ICronRepository,
    private schedulerRegistry: SchedulerRegistry,
  ) {
    this.id = 0;
  }

  async execute(eventId): Promise<string> {
    this.id++;
    // const cron = CronFactory.create(String(this.id));

    // 대충 인자값으로 서버에 요청 보낼 axios 만들기
    // = console.log('이메일 전송 API를 보냈습니다.')
    const time = new Date();
    const name = v4();
    const fun = () => {
      console.log(`${name}이메일 전송 API를 보냈습니다.`);
      this.schedulerRegistry.deleteCronJob(name);
    };
    time.setSeconds(time.getSeconds() + 30);

    const job = new CronJob(time, fun, null, true);

    this.schedulerRegistry.addCronJob(name, job);
    return String(this.id);
  }
}
