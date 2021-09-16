import { Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCron } from '@src/application/usecase/createCron';

@Controller('Cron')
export class CreateCronController {
  constructor(private readonly useCase: CreateCron) {}
  @ApiTags('Cron')
  @ApiOperation({ summary: 'Create Cron And Scheduling Event' })
  @Post('/:eventId')
  async createCron(@Param('eventId') eventId: string) {
    return await this.useCase.execute(eventId);
  }
}
