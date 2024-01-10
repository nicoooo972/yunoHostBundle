import { Injectable } from '@nestjs/common';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs').promises;
// @ts-expect-error
@Injectable('ASYNC_CONNECTION')
export class AppsService {
  // @ts-ignore
  async getApps() {
    try {
      return await axios
        .get('https://app.yunohost.org/default/v3/apps.json')
        .then((response) => response.data.apps)
        .catch((error) => {
          if (error.response) {
            // la requête a été faite et le code de réponse du serveur n’est pas dans
            // la plage 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // la requête a été faite mais aucune réponse n’a été reçue
            // `error.request` est une instance de XMLHttpRequest dans le navigateur
            // et une instance de http.ClientRequest avec node.js
            console.log(error.request);
          } else {
            // quelque chose s’est passé lors de la construction de la requête et cela
            // a provoqué une erreur
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    } catch (e) {
      throw e;
    }
  }

  // Chemin relatif fichier json
  // @ts-ignore
  filePath = './bundle.json';
  async getAppsChosen() {
    try {
      const res = [];
      const jsonData = await fs.readFile(this.filePath, 'utf-8');

      const parsedData = JSON.parse(jsonData);

      const appsList = parsedData.bundle.applications;
      const bundleName = parsedData.bundle.name;

      const appsData = await this.getApps();

      for (const app in appsData) {
        const element = appsData[app];

        const index = appsList.indexOf(element.manifest.name);
        let name = '';
        if (index !== -1) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          name = appsList[index];

          if (element.manifest.name === name) {
            res.push({
              name: element.manifest.name,
              description: element.manifest.description.en,
              weight: element.manifest.integration.disk,
              version: element.manifest.version,
              category: element.category,
              subtags: element.subtags,
            });
          }
        }
      }

      // Convertissez le tableau JSON en format JSON
      const appsJSON = JSON.stringify(res, null, 2); // Les paramètres null, 2 formatent le JSON avec une indentation de 2 espaces.

      // Spécifiez le chemin du fichier JSON que vous souhaitez créer
      const pathData = `./${bundleName}.json`;

      // Écrivez le contenu JSON dans le fichier
      await fs.writeFile(pathData, appsJSON, (error) => {
        if (error) {
          console.error("Erreur lors de l'écriture du fichier :", error);
        } else {
          console.log('Fichier JSON créé avec succès !');
        }
      });
    } catch (e) {
      throw e;
    }
  }
}
