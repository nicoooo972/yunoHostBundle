import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsService } from './apps/apps.service';
import { InstallController } from './install/install.controller';
import { InstallService } from './install/install.service';

@Module({
  imports: [],
  controllers: [AppController, InstallController],
  providers: [AppService, AppsService, InstallService],
})
export class AppModule {}
