# Atelier Zéro — site React

## Installation

1. Ouvre ce dossier dans VS Code.
2. Ouvre un terminal dans le dossier.
3. Lance :

```bash
npm install
npm run dev
```

4. Ouvre l'adresse indiquée par Vite, généralement `http://localhost:5173`.

## Numéro WhatsApp

Dans `src/utils/whatsapp.js`, remplace :

```js
const WHATSAPP_NUMBER = "33600000000";
```

par ton numéro au format international, sans `+`, sans espaces et sans le premier `0`.

Exemple : `06 12 34 56 78` devient `33612345678`.

## Produits

Les produits sont dans :

```text
src/data/products.js
```

Tu peux modifier les noms, prix, tailles, descriptions et images directement dans ce fichier.

## Images

Les visuels sont dans :

```text
public/assets
```

## Build de production

```bash
npm run build
```

Le dossier final sera créé dans `dist/`.
