import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
//import { PrismaClient } from '@prisma/client';
import { AppService } from 'src/app.service';

//const prisma = new PrismaClient();
@Injectable()
export class InstallService {
  constructor(private readonly appService: AppService) {}

  async installApplication(): Promise<void> {
    const applications = this.appService.getData();
    console.log(applications);
    try {
      for (const application of applications) {
        const { appName, domain, password, admin } = application;

        const command = `ssh nicoco@dcm1tlg1.nohost.me "echo '12345azerty' | sudo -S yunohost app install ${appName} --args '${domain}&path=/${appName}&init_main_permission=admins&password=${password}&admin=${admin}'"`;

        const childProcess = spawn('bash', ['-c', command]);

        childProcess.stdout.on('data', (data) => {
          console.log(`Données de sortie : ${data}`);
        });

        childProcess.stderr.on('data', (data) => {
          console.error(`Erreur de sortie : ${data}`);
        });

        childProcess.on('close', (code) => {
          if (code === 0) {
            console.log(`Installation réussie de ${appName}`);
          } else {
            console.error(
              `Erreur lors de l'installation de ${appName}, code de sortie : ${code}`,
            );
          }
        });
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'installation des applications:",
        error.message,
      );
    }
  }

  /* async installApplication(): Promise<void> {
    const applications = await prisma.application.findMany();
    try {
      for (const application of applications) {
        const { appName, domain, password, admin } = application;

        // Construire la commande shell
        const command = `ssh nicoco@dcm1tlg1.nohost.me "echo '12345azerty' | sudo -S yunohost app install ${appName} --args '${domain}&path=/${appName}&init_main_permission=admins&password=${password}&admin=${admin}'"`;

        const childProcess = spawn('bash', ['-c', command]);

        childProcess.stdout.on('data', (data) => {
          console.log(`Données de sortie : ${data}`);
        });

        childProcess.stderr.on('data', (data) => {
          console.error(`Erreur de sortie : ${data}`);
        });

        childProcess.on('close', (code) => {
          if (code === 0) {
            console.log(`Installation réussie de ${appName}`);
          } else {
            console.error(
              `Erreur lors de l'installation de ${appName}, code de sortie : ${code}`,
            );
          }
        });
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'installation des applications:",
        error.message,
      );
    }
  }*/
}
