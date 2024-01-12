# Projet Yunohost
## Documentation technique
## :star: Introduction
Bienvenue dans la documentation technique de l'application web.
Cette documentation fournit des informations essentielles pour comprendre le fonctionnement interne de l'application, déployer de nouvelles fonctionnalités,
déboguer des problèmes et maintenir l'application.

## :clipboard: Présentation de l'application
Notre application a pour but de proposer à un utilisateur différents bundles d'applications pré-configurer répondant de manière adéquate à ses besoins, contextes et usages récurrents.
L'utilisateur pourra visualiser une liste d'applications selon le bundle qu'il aura sélectionné et par la suite il pourra choisir parmi la liste des applications proposées celle qu'ils
souhaitent installées.

## :wrench: Installation et Configuration
```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
> :warning: Les commandes ci-dessus doivent être exécutées pour le Front-End et le Back-End.

## :construction: Architecture de l'application
L'application est construite sur une architecture technique et applicative N-tier. Elle se compose en 3 parties :
* Le client : une interface utilisateur web via un navigateur
* Le middle-tier : une api réalisée qui fera la liaison entre le client et le serveur web
* Le serveur Yunohost : serveur web de Yunohost où sera installé les applications

<img src="C:\Users\Alan\Documents\yunohost\yunoHostBundle\Archi_Yunohost.png" width="350"/>

### Le client (Front-End)
L'application web utilise une architecture basée sur le modèle ReactJs.

#### Technos Front-End
* ReactJS
* ViteJS
* Axios
* Material UI
* Typescript

#### Technologies Back-End (API)
L'API est construite avec NestJs.
* NodeJs
* NestJs
* Typescript
* Axios
* Fs

## :left_right_arrow: Communication entre le client et l'API
La communication se fait via des API REST. Les requêtes HTTP sont gérées à l'aide d'Axios.
Le format de transmissions de données entre le front et le back s'effectue en JSON.

| Endpoint            | Method | Description                                                                                   | Fonction             | Fichier                    |   
|---------------------|--------|-----------------------------------------------------------------------------------------------|----------------------|----------------------------|   
| app/app             | GET    | Récupère la liste des applications                                                            | getApp()             | app.service.ts             |        
| app/files           | GET    | Renvoie la liste des applications dans le bundle + le detail (version, poids, catégorie, ...) | getAppsBundle()      | app.service.ts             |   
| install/            | POST   | Récupère la liste des applications envoyées par le client et les installent sur le serveur    | installApplication() | install/install.service.ts |
| install/users-admin | GET    | Récupère depuis le serveur la liste des admins                                                | getAdmin()           | install/install.service.ts |

# :hammer: Création du bundle
Pour créer un bundle l'admin éditera le fichier **bundle.json** qui se trouve à la racine
de l'application. Les informations de base à remplir sont :
* Le nom
* La description
* La liste des applications

> :bulb: Le fichier **bundle.json** contiendra la liste des bundles, il sera toujours possible d'ajouter de nouvelles informations.

## :memo: Authors
### Equipe 1
* Malika
* Arthur
* Nicolas
* Kerrian
* Alan
