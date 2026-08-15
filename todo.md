# Travaux à réaliser

- [ ] Définir une méthode d’activation biométrique qui ne supprime pas la solution de récupération du coffre.
- [ ] Concevoir un onboarding Threnyx mobile en plusieurs cartes guidées, sans page d’accueil promotionnelle interne.
- [ ] Créer la landing page React responsive, animée et conforme à l’univers visuel Threnyx.
- [ ] Vérifier la compatibilité de l’onboarding avec WebAuthn PRF et le verrouillage du coffre.
- [ ] Créer le dépôt GitHub dédié et publier la landing page.
- [ ] Ajouter le workflow GitHub Actions qui compile la landing React et la publie sur GitHub Pages.
- [ ] Vérifier l’URL GitHub Pages après son premier déploiement.
- [x] Ajouter les métadonnées SEO, Open Graph et les données structurées de la landing page.
- [x] Ajouter `robots.txt`, `sitemap.xml` et un fichier explicite pour les robots d’IA.
- [x] Valider les fichiers SEO publiés sur GitHub Pages et préparer les URL de soumission.
- [x] Auditer toutes les occurrences de Threnyx et des assets de marque dans les deux projets.
- [x] Créer plusieurs propositions de logo minimaliste Threnyx et choisir une direction.
- [x] Appliquer le nom Threnyx, le logo retenu et les métadonnées associées à la landing, la PWA et leurs fichiers publics.
- [x] Actualiser les icônes PWA, le manifeste, les sitemaps et les documents de référencement.
- [x] Vérifier les deux déploiements publics après la migration de marque.
- [x] Renommer les dépôts GitHub historiques vers les dépôts Threnyx retenus.
- [x] Adapter les domaines GitHub Pages, les liens entre produits, les sitemaps et les URL canoniques.
- [x] Informer les utilisateurs de la réinstallation de la PWA depuis la nouvelle adresse Threnyx.
- [ ] Vérifier le connecteur Semrush et relever les données initiales de visibilité de Threnyx.
- [ ] Identifier les mots-clés, requêtes et contenus à potentiel sur la messagerie privée.
- [ ] Mettre à jour la landing avec des contenus SEO utiles et vérifiables, sans promesses d’anonymat excessives.
- [ ] Contrôler les signaux d’exploration publics et préparer les soumissions Google et Bing.
- [x] Forcer les clics de notification Threnyx à ouvrir la racine de la PWA, sans sous-chemin invalide.
- [x] Clarifier dans l’ajout de contact que chaque participant doit recevoir la carte de l’autre par QR, lien ou NFC.
- [x] Valider et publier le correctif PWA avec une nouvelle version de service worker.

## Vérification locale en cours

La modale d’ajout de contact dépend d’une identité déjà créée ; elle ne peut pas être ouverte dans l’aperçu vierge sans créer de compte de test. Le code de la modale, le script JavaScript et le hash CSP du correctif ont été validés indépendamment.

Le déploiement public sert le service worker `threnyx-pwa-v9`, dont les clics de notification utilisent explicitement la racine enregistrée de la PWA.

## Capacités locales évaluées

- [x] Vérifier la faisabilité navigateur de la traduction vocale en direct, de l’IA WebGPU, des filtres AR, de la recherche sémantique, de la détection de deepfake vocal et de la proximité BLE.
- [x] Définir un assistant local WebGPU optionnel, sans chargement automatique ni transfert de contenu vers un serveur.
- [x] Implémenter les éléments réalisables avec repli clair selon le navigateur et l’appareil.
- [x] Mettre à jour la landing et `llms.txt` avec uniquement les fonctions réellement livrées et leurs limites.

L’application comprend maintenant un laboratoire local optionnel : assistant navigateur ou SmolLM2 135M WebGPU, recherche volontaire dans un chat actif et sous-titres de microphone avec traduction locale lorsque les packs hors ligne du navigateur existent. Les filtres AR, l’index par embeddings, l’alerte de deepfake vocal et le mode de proximité BLE restent à l’étude ; ils ne sont pas activés ni présentés comme disponibles.

## Vérification en cours

Le premier écran de création de compte se charge correctement en local : nom d’agent, statut facultatif, portrait optionnel et passage vers l’étape de protection sont disponibles. Dans l’aperçu local, qui n’offre pas d’authentificateur de plateforme, le parcours bascule correctement vers la phrase secrète au lieu de proposer une biométrie non fonctionnelle. La version publique GitHub Pages sert également le nouvel écran d’inscription en trois étapes.
