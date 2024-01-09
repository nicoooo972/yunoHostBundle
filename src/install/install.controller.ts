import { Controller, Get } from '@nestjs/common';
import { InstallService } from './install.service';

@Controller('install')
export class InstallController {
  constructor(private readonly installService: InstallService) {}

  @Get()
  async installApplications(): Promise<string> {
    try {
      await this.installService.installApplication();
      return 'Installation en cours... Vérifiez les journaux pour plus de détails.';
    } catch (error) {
      console.error(
        "Erreur lors de l'installation des applications:",
        error.message,
      );
      return "Erreur lors de l'installation des applications.";
    }
  }
}
