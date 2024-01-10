import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppsController} from "./apps/apps.controller";
import { AppsService } from './apps/apps.service';

@Module({
  imports: [],
  controllers: [AppController, AppsController],
  providers: [AppService, AppsService],
})
export class AppModule {}
