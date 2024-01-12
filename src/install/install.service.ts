import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import { spawn, exec } from 'child_process';
import { EventEmitter } from 'events';

const execPromise = promisify(exec);

@Injectable()
export class InstallService {
  private eventEmitter = new EventEmitter();

  async installApplication(datas: any[]): Promise<void> {
    try {
      const installedApps = await this.getInstalledApp();

      for (const data of datas) {
        const { name, domain, admins, password } = data;

        if (Array.isArray(name)) {
          for (const appName of name) {
            if (installedApps.includes(appName)) {
              console.error(`L'application ${appName} est déjà installée`);
            } else {
              const command = `ssh nicoco@dcm1tlg1.nohost.me "sudo yunohost app install ${appName} --args 'domain=${domain}&path=/${appName}&init_main_permission=admins&admin=${admins}&password=${password}&user_home=false'"`;
              const childProcess = spawn('bash', ['-c', command]);

              childProcess.stdout.on('data', (data) => {
                const outputData = data.toString();
                console.log(`Données de sortie : ${data}`);
                this.eventEmitter.emit('update', outputData);
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
          }
        } else {
          console.error(`La valeur de 'name' n'est pas un tableau.`);
        }
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'installation des applications:",
        error.message,
      );
    }
  }

  get Event() {
    return this.eventEmitter;
  }

  async getAdmin(): Promise<string> {
    const { stdout } = await execPromise(
      'ssh nicoco@dcm1tlg1.nohost.me sudo yunohost user list --fields username --output-as json',
    );
    // Parse le JSON
    const userAdmin = JSON.parse(stdout);

    return userAdmin;
  }

  async getDomain(): Promise<string> {
    const { stdout } = await execPromise(
      'ssh nicoco@dcm1tlg1.nohost.me sudo yunohost domain list --output-as json',
    );
    const domain = JSON.parse(stdout);
    return domain;
  }

  async getInstalledApp(): Promise<string> {
    try {
      const { stdout } = await execPromise(
        'ssh nicoco@dcm1tlg1.nohost.me sudo yunohost app list --output-as json',
      );
      const installedApps = JSON.parse(stdout).apps;
      return installedApps.map((app: any) => app.id);
    } catch (error) {
      console.error(
        `Erreur lors de la vérification de l'installation de l'application  ${error.message}`,
      );
    }
  }
}