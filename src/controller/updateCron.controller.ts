import { Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateCron } from '@src/application/usecase/updateCron';

@Controller('Cron')
export class UpdateCronController {
  constructor(private readonly useCase: UpdateCron) {}
  @ApiTags('Cron')
  @ApiOperation({ summary: 'Update Cron' })
  @Put('/:cronId')
  async updateCron(@Param('cronId') cronId: string) {
    return await this.useCase.execute(cronId);
  }
}
