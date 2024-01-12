import { Injectable } from '@nestjs/common';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs').promises;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@Injectable()
export class AppService {
  async getApp() {
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

  filePath = './bundle.json';
  async getAppsChosen() {
    try {
      const res = [];
      const appsData = await this.getApp();

      const jsonData = await fs.readFile(this.filePath, 'utf-8');

      const parsedData = JSON.parse(jsonData);

      const appsList = parsedData.bundle.applications;

      const bundleName = parsedData.bundle.name;
      const bundleDesc = parsedData.bundle.description;
      res.push({
        bundleName: bundleName,
        bundleDesc: bundleDesc,
      });
      for (const app in appsData) {
        const element = appsData[app];

        const index = appsList.indexOf(element.manifest.name);
        let name = '';
        if (index !== -1) {
          name = appsList[index];
          if (element.manifest.name === name) {
            res.push({
              id: element.id,
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

      return res;
    } catch (e) {
      throw e;
    }
  }
}
