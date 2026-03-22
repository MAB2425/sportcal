# Mon Calendrier Sportif — Cloudflare Pages

## Déploiement en 5 étapes

### 1. Créer un compte Cloudflare
- Va sur **cloudflare.com**
- Clique **Sign up** — gratuit, pas de carte de crédit

### 2. Déployer le site
- Dans le dashboard, clique **Workers & Pages** (menu gauche)
- Clique **Create** → **Pages** → **Upload assets**
- Glisse-dépose CE DOSSIER complet (ou clique pour sélectionner)
- Clique **Deploy site**
- Ton URL ressemble à : `sportcal.pages.dev`

### 3. Ajouter ta clé Gemini
- Va dans ton projet Pages → **Settings** → **Environment variables**
- Clique **Add variable**
- Nom : `GEMINI_KEY`
- Valeur : ta clé `AIza...`
- Clique **Save**

### 4. Redéployer
- Va dans **Deployments** → **Retry deployment**

### 5. Installer sur ton iPhone
- Ouvre l'URL dans Safari
- Partager ↑ → **Sur l'écran d'accueil**

## Utilisation
- Bouton 📷 bleu = importer une photo de ta galerie
- Bouton ➕ vert = ajouter un événement manuellement
- Appuie sur un événement = voir / modifier / notes / supprimer
- Le lieu est cliquable → ouvre Google Maps
