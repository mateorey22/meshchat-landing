# Travaux à réaliser

- [ ] Définir une méthode d’activation biométrique qui ne supprime pas la solution de récupération du coffre.
- [ ] Concevoir un onboarding MeshChat mobile en plusieurs cartes guidées, sans page d’accueil promotionnelle interne.
- [ ] Créer la landing page React responsive, animée et conforme à l’univers visuel MeshChat.
- [ ] Vérifier la compatibilité de l’onboarding avec WebAuthn PRF et le verrouillage du coffre.
- [ ] Créer le dépôt GitHub dédié et publier la landing page.
- [ ] Ajouter le workflow GitHub Actions qui compile la landing React et la publie sur GitHub Pages.
- [ ] Vérifier l’URL GitHub Pages après son premier déploiement.

## Vérification en cours

Le premier écran de création de compte se charge correctement en local : nom d’agent, statut facultatif, portrait optionnel et passage vers l’étape de protection sont disponibles. Dans l’aperçu local, qui n’offre pas d’authentificateur de plateforme, le parcours bascule correctement vers la phrase secrète au lieu de proposer une biométrie non fonctionnelle. La version publique GitHub Pages sert également le nouvel écran d’inscription en trois étapes.
