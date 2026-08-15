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
- [ ] Auditer toutes les occurrences de Threnyx et des assets de marque dans les deux projets.
- [ ] Créer plusieurs propositions de logo minimaliste Threnyx et choisir une direction.
- [ ] Appliquer le nom Threnyx, le logo retenu et les métadonnées associées à la landing, la PWA et leurs fichiers publics.
- [ ] Actualiser les icônes PWA, le manifeste, les sitemaps et les documents de référencement.
- [ ] Vérifier les deux déploiements publics après la migration de marque.
- [ ] Renommer les dépôts GitHub historiques vers les dépôts Threnyx retenus.
- [ ] Adapter les domaines GitHub Pages, les liens entre produits, les sitemaps et les URL canoniques.
- [ ] Informer les utilisateurs de la réinstallation de la PWA depuis la nouvelle adresse Threnyx.

## Vérification en cours

Le premier écran de création de compte se charge correctement en local : nom d’agent, statut facultatif, portrait optionnel et passage vers l’étape de protection sont disponibles. Dans l’aperçu local, qui n’offre pas d’authentificateur de plateforme, le parcours bascule correctement vers la phrase secrète au lieu de proposer une biométrie non fonctionnelle. La version publique GitHub Pages sert également le nouvel écran d’inscription en trois étapes.
