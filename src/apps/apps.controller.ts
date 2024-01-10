import { Controller, Get, Post } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}
  @Get()
  findAll() {
    return this.appsService.getApps();
  }

  @Get('file')
  findData() {
    return this.appsService.getAppsChosen();
  }
}
