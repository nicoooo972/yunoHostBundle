import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
//import { PrismaClient } from '@prisma/client';

@Injectable()
export class InstallService {
  //constructor(private readonly prisma: PrismaClient) {}
  private readonly applications = [
    {
      appName: 'nextcloud',
      domain: 'dcm1tlg1.nohost.me',
      password: '12345azerty',
      path: '/path1',
      admin: 'nicoco',
    },
    {
      appName: 'vaultwarden',
      domain: 'dcm1tlg1.nohost.me',
      password: '12345azerty',
      path: '/path2',
      admin: 'nicoco',
    },
  ];

  async installApplication(): Promise<void> {
    try {
      for (const application of this.applications) {
        const { appName, domain, password, path, admin } = application;

        // Construire la commande shell
        const command = `ssh nicoco@dcm1tlg1.nohost.me "echo '12345azerty' | sudo -S yunohost app install ${appName} --args '${domain}&path=${path}&init_main_permission=admins&password=${password}&admin=${admin}'"`;

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

  /*async installApplication(): Promise<void> {
    const applications = await this.prisma.findMany();

      for (const installation of installations) {
        const { appName, domain, password } = installation;

        // Construire la commande shell
        const childProcess = spawn('sudo', ['-S', 'yunohost', 'app', 'install', appName, `--args ${domain}&path=${installation.path}&init_main_permission=admins&password=${password}`]);
        // Exécuter la commande shell
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
            console.error(`Erreur lors de l'installation de ${appName}, code de sortie : ${code}`);
          }

  }
  }*/
}
