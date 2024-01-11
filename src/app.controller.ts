import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appsService: AppService) {}
  @Get('app')
  getApp() {
    return this.appsService.getApp();
  }

  @Get('files')
  async getAppsChosen() {
    return this.appsService.getAppsChosen();
  }
}
