import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallController } from './install/install.controller';
import { InstallService } from './install/install.service';

@Module({
  imports: [],
  controllers: [AppController, InstallController],
  providers: [AppService, AppService, InstallService],
})
export class AppModule {}
