import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ExistsCron } from '@src/application/usecase/existsCron';

@Controller('Cron')
export class ExistsCronController {
  constructor(private readonly useCase: ExistsCron) {}
  @ApiTags('Cron')
  @ApiOperation({ summary: 'Check CronJob' })
  @Get('/:CronId')
  checkCron(@Param('cronId') cronId: string) {
    return this.useCase.execute(cronId);
  }
}
