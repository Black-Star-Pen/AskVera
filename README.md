# AskVera

Un outil pour vérifier une information en quelques secondes : un site, un tableau de bord et un **bot Telegram** qui analyse du texte, des images, des PDF et des vidéos grâce à l'IA.

Site en ligne : https://front-on-vera.vercel.app/

## Le contexte

Projet réalisé pour les fondateurs de la startup AskVera, en compétition avec d'autres équipes.
Nous étions **une équipe de cinq**, organisés en méthode agile avec Trello et Discord :

- trois développeurs : [ealmvin](https://github.com/ealmvin), [Amurius](https://github.com/Amurius) et moi ;
- deux web designers.

Ce dépôt est une copie du code du projet, publiée pour présenter le travail réalisé. Le mérite en revient à toute l'équipe ; ma part est détaillée ci-dessous.

## Ma part

- **Le bot Telegram, de A à Z** (Node.js, Telegraf).
- **Le tri des contenus reçus** : le bot détecte le type de ce qu'on lui envoie, vérifie le fichier, puis l'envoie au bon traitement (analyse des images et des vidéos avec l'API OpenAI, extraction du texte pour les PDF) avant de transmettre le résultat à l'API Vera.
- **Des traitements qui ne bloquent personne** : extraire le texte d'un PDF ou analyser une vidéo prend du temps. Le bot répond aussitôt « analyse en cours… », puis envoie le résultat quand il est prêt. En production, il fonctionne par webhooks : c'est Telegram qui prévient le serveur à chaque message.
- **L'export CSV** des données du tableau de bord.
- **Une participation à l'intégration** de la page d'accueil (Angular, Tailwind).

## Ce que fait l'application

- Une page d'accueil qui présente Vera, et une conversation pour lui soumettre un texte, un lien ou un document.
- Des comptes utilisateurs, avec connexion par jeton JWT.
- Des sondages : création, réponses, résultats.
- Un tableau de bord protégé, avec ses graphiques et son export CSV.
- Des analyses par IA : lecture du texte d'une image, transcription et analyse d'une vidéo, analyse d'un texte par l'API Vera.

## Stack technique

| Partie | Technologies |
| --- | --- |
| Front (`front/`) | Angular 21, TypeScript, Tailwind CSS 4, Apache ECharts |
| Back (`back/`) | Node.js, Express 5, PostgreSQL, JWT, Telegraf, API OpenAI, Multer, FFmpeg, Nodemailer |

## Structure du dépôt

```
AskVera/
├── front/   le site : page d'accueil, conversation, sondages, tableau de bord
└── back/    l'API et le bot Telegram
```

Chaque dossier a son propre README : celui de [`back/`](back/README.md) décrit en détail les routes de l'API.

## Lancer le projet en local

Il faut [Bun](https://bun.sh) (ou Node.js 18 et plus), PostgreSQL et FFmpeg.

### L'API (dossier `back/`)

```bash
cd back
bun install
cp .env.example .env
bun run dev
```

Avant de lancer, remplis le fichier `.env` avec tes propres valeurs (base de données, clé JWT, clés des API). Le schéma de la base est dans `back/db/schema.sql`. L'API démarre sur `http://localhost:3000`.

### Le site (dossier `front/`)

```bash
cd front
bun install
bun start
```

Le site s'ouvre sur `http://localhost:4200`.

## Sécurité

Aucune clé ni aucun mot de passe n'est écrit dans ce dépôt. Tout ce qui est secret passe par des variables d'environnement : la liste complète, avec des valeurs d'exemple, est dans `back/.env.example`.
