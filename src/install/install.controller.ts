import { Body, Controller, Get, Post, Res, Sse } from '@nestjs/common';
import { InstallService } from './install.service';
import { Response } from 'express';
import { Observable } from 'rxjs';

@Controller('install')
export class InstallController {
  constructor(private readonly install: InstallService) {}

  @Post()
  async installApplication(@Body() datas: any[], @Res() res: Response) {
    try {
      const install = await this.install.installApplication(datas);
      res.status(200).json({ status: 200, message: 'OK', install });
    } catch (error) {
      console.error(
        "erreur lors de l'installation des applications",
        error.message,
      );
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  @Get('users-admin')
  async getAdmin(@Res() res: Response): Promise<any> {
    try {
      const admins = await this.install.getAdmin();
      res.status(200).json({ status: 200, message: 'OK', admins });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }

  @Get('domain')
  async getDomain(@Res() res: Response): Promise<any> {
    try {
      const domain = await this.install.getDomain();
      res.status(200).json({ status: 200, message: 'OK', domain });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }

  @Get('installed-apps')
  async getInstalledApps(@Res() res: Response): Promise<any> {
    try {
      const installedApps = await this.install.getInstalledApp();
      res.status(200).json({ status: 200, message: 'OK', installedApps });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }

  @Sse('update')
  update() {
    return new Observable((subscriber) => {
      this.install.Event.on('update', (datas) => {
        subscriber.next({ datas });
      });
    });
  }
}
