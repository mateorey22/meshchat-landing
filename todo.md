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

## Vérification en cours

Le premier écran de création de compte se charge correctement en local : nom d’agent, statut facultatif, portrait optionnel et passage vers l’étape de protection sont disponibles. Dans l’aperçu local, qui n’offre pas d’authentificateur de plateforme, le parcours bascule correctement vers la phrase secrète au lieu de proposer une biométrie non fonctionnelle. La version publique GitHub Pages sert également le nouvel écran d’inscription en trois étapes.

## Régression à corriger après retrait du laboratoire local

- [ ] Vérifier la détection de l’identité existante sans effacer IndexedDB ni les identifiants WebAuthn.
- [ ] Rétablir le déclenchement biométrique automatique lorsque le coffre possède déjà une clé PRF.
- [ ] Vérifier le parcours de création d’identité et publier uniquement un correctif de stabilité.

## Synchronisation décentralisée et clé de récupération NFC

- [x] Comparer IPFS, Nostr, Hypercore et les primitives navigateur pour une réplication chiffrée compatible PWA.
- [x] Définir un protocole Threnyx de manifestes chiffrés, fragments répliqués et journal de synchronisation multi-appareils.
- [x] Implémenter un premier noyau de sauvegarde chiffrée répliquée et de synchronisation entre appareils Threnyx.
- [x] Concevoir une clé NFC physique de récupération qui ne contient jamais l’identité ni les données en clair.
- [x] Tester la lecture et l’écriture de la clé NFC sur un tag physique avec Chrome Android ; les tests de relais, de récupération sur nouvel appareil simulé, de clé altérée et d’intégrité sont terminés.
- [x] Documenter les garanties et limites vérifiables avant toute présentation publique sur la landing.

## NFC de récupération et vérification Google — itération courante

- [x] Expliquer que le tag NFC ne contient ni messages ni clé privée de messagerie, mais un paquet de reprise permettant de retrouver un snapshot chiffré.
- [x] Diagnostiquer l’échec d’écriture de la clé de récupération alors que les cartes de contact fonctionnent.
- [x] Corriger le gestionnaire d’écriture TCV1 sans modifier le protocole de carte de contact.
- [x] Ajouter le fichier de vérification Google fourni à la racine publique de la landing.
- [x] Vérifier le build et les contrôles CSP avant publication.
- [x] Tester l’écriture et la lecture de TCV1 sur le tag physique avec Chrome Android ; le format contient 69 octets binaires et environ 97 caractères ASCII encodés.

Constellation Vault ne diffuse pas le compte en clair chez tous les relais : les relais reçoivent des fragments chiffrés et un manifeste signé. Le tag NFC classique est copiable et ne constitue pas un facteur matériel anti-clonage. La disponibilité dépend du quorum de relais et de la publication manuelle du snapshot.

## Audit Constellation — remédiations de sécurité

- [x] Empêcher qu’un manifeste à version plus ancienne mais daté plus tard remplace une version plus récente.
- [x] Exiger le type Nostr attendu lors de la vérification cryptographique des manifestes et fragments.
- [x] Imposer une réauthentification locale avant toute écriture d’une clé NFC de récupération.
- [x] Retirer de la documentation toute promesse de détection de branches par parent non implémentée.
- [x] Valider les scénarios de rollback, de kind inattendu, de clé NFC et de restauration après correction.

## Migration Nostr standardisée et convergence CRDT

- [x] Vérifier les spécifications NIP-44, NIP-59 et NIP-EE ainsi que leurs implémentations réellement utilisables en navigateur.
- [x] Définir une migration lisible par les anciens appareils, avec négociation de capacité et conservation des messages existants.
- [x] Évaluer un transport MLS/NIP-EE sans annoncer de forward secrecy tant que l’état de groupe et la rotation sont validés.
- [ ] Concevoir un document CRDT chiffré pour contacts, groupes, messages et préférences Constellation.
- [ ] Tester des modifications concurrentes hors ligne, la fusion, la réplication chiffrée et la récupération NFC.
- [x] Valider localement v18 deux branches Yjs chiffrées, signées comme fragments Nostr, relues puis fusionnées avant restauration.
- [ ] Revalider sur tag NFC physique et plusieurs relais la récupération v18 de branches CRDT concurrentes.
- [x] Mettre à jour la documentation et les formulations publiques avec les garanties réellement validées.
- [x] Mettre à jour la landing Threnyx et son fichier pour assistants IA avec la migration NIP-17 et la convergence Yjs effectivement publiées.
- [ ] Définir une politique de tombstones, de rétention et d’union immuable avant toute fusion CRDT des messages, suppressions et médias.

## Nouvelles fonctionnalités à implémenter dans Threnyx et à présenter sur la landing

- [x] Implémenter le wipe panique triple-tap avec fermeture P2P/relais, effacement IndexedDB, nettoyage mémoire et rechargement discret ; ne jamais prétendre effacer les données déjà publiées aux relais.
- [ ] Concevoir et tester le code de détresse optionnel, stocké uniquement sous forme de hash séparé, avec distinction sûre entre échec de déverrouillage et déclenchement du wipe.
- [x] Ajouter l’écran de vérification de sécurité par fingerprint/QR avec états vérifié, date de vérification et invalidation automatique lors d’un changement de clé.
- [ ] Ajouter les appareils liés à portée limitée avec QR temporaire, demande d’autorisation, chiffrement par appareil, scopes minimaux, révocation et tests de non-transmission hors scope.
- [ ] Ajouter les invitations de groupe GC1 via NFC/QR avec expiration, révocation, usages contrôlés, ajout direct au groupe et distinction stricte avec MC1/TCV1.
- [ ] Ajouter un quota GC1 configurable avec décrément garanti contre les demandes concurrentes et refus explicite lorsqu’il est atteint.
- [x] Mettre en file d’attente les demandes GC1 hors ligne avec accusé, état d’échec visible et reprise après reconnexion.
- [ ] Tester la séparation MC1/GC1/TCV1 ainsi que l’adhésion, l’expiration, la révocation, les accusés et le quota GC1 concurrent.
- [x] Mettre à jour la landing avec des démonstrations animées et des formulations honnêtes sur ces fonctionnalités, sans présenter une fonctionnalité non testée comme disponible.
- [ ] Ajouter les tests unitaires et d’intégration nécessaires pour les nouvelles fonctionnalités avant publication.
- [x] Refaire le checkpoint et pousser la landing après validation des nouvelles sections et de leur SEO structuré.

## Limites de sécurité à conserver dans toute communication publique

- [x] Mentionner que le wipe local ne retire pas les événements déjà publiés sur des relais Nostr ni les données déjà transmises à un appareil lié.
- [x] Mentionner que le fingerprint hors-bande réduit le risque MITM mais dépend de la comparaison par un canal de confiance.
- [ ] Mentionner que la révocation d’un appareil lié bloque les nouvelles synchronisations sans effacer les données déjà reçues.
- [x] Ne pas annoncer de forward secrecy, de suppression globale des relais ou de récupération magique des gros médias hors ligne.

- [x] Ajouter et exécuter un test déterministe de format GC1, séparation MC1/TCV1, quota et révocation.
- [ ] Ajouter un test navigateur multi-appareils couvrant l’Outbox, l’accusé GC1 et la jointure réelle après reconnexion.
