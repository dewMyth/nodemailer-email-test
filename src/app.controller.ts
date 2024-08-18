import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('email')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send')
  async sendEmail() {
    return await this.appService.sendEmail();
  }
}
