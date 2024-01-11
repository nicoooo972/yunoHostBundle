import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import { spawn, exec } from 'child_process';

const execPromise = promisify(exec);

@Injectable()
export class InstallService {
  async installApplication(datas: any[]): Promise<void> {
    try {
      for (const data of datas) {
        const { name, domain, admins, password } = data;

        const command = `ssh nicoco@dcm1tlg1.nohost.me sudo -S yunohost app install ${name} --args '${domain}&path=/${name}&init_main_permission=admins&password=${password}&admin=${admins}'"`;

        const childProcess = spawn('bash', ['-c', command], { shell: true });

        childProcess.stdout.on('data', (data) => {
          console.log(`Données de sortie : ${data}`);
        });

        childProcess.stderr.on('data', (data) => {
          console.error(`Erreur de sortie : ${data}`);
        });

        childProcess.on('close', (code) => {
          if (code === 0) {
            console.log(`Installation réussie de ${name}`);
          } else {
            console.error(
              `Erreur lors de l'installation de ${name}, code de sortie : ${code}`,
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

  async getAdmin(): Promise<string> {
    const { stdout } = await execPromise(
      'ssh nicoco@dcm1tlg1.nohost.me sudo -S yunohost user list --fields username --output-as json',
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
}
