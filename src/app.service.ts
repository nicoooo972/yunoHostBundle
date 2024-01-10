import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as toml from '@iarna/toml';

@Injectable()
export class AppService {
  getData(): any[] {
    const data = fs.readFileSync('./test.toml', 'utf-8');

    try {
      const tomlParsed = toml.parse(data);
      if (tomlParsed && tomlParsed.bundle) {
        const bundleData = tomlParsed.bundle;
        return [bundleData];
      } else {
        console.error('La clé "bundle" n\'existe pas dans le fichier TOML.');
        return [];
      }
    } catch (error) {
      console.error(
        'Erreur lors de la lecture du fichier TOML :',
        error.message,
      );
      return [];
    }
    // const dataParse = JSON.parse(data);
    // if (dataParse && dataParse.bundle) {
    //   // Accédez à la clé "bundle" pour obtenir les données spécifiques
    //   const bundleData = dataParse.bundle;

    //   // Vous pouvez également retourner l'objet "bundleData" complet si nécessaire
    //   return [bundleData];
    // } else {
    //   console.error('La clé "bundle" n\'existe pas dans le JSON.');
    //   return [];
    // }
  }
}
