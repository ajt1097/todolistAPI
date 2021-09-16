import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteCron } from '@src/application/usecase/deleteCron';

@Controller('Cron')
export class DeleteCronController {
  constructor(private readonly useCase: DeleteCron) {}
  @ApiTags('Cron')
  @ApiOperation({ summary: 'Delete Scheduling' })
  @Delete('/:cronId')
  async deleteCron(@Param('cronId') cronId: string) {
    await this.useCase.execute(cronId);
  }
}
