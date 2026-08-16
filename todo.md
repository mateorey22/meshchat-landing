# Travaux à réaliser

- [x] Définir une méthode d’activation biométrique qui ne supprime pas la solution de récupération du coffre.
- [x] Concevoir un onboarding Threnyx mobile en plusieurs cartes guidées, sans page d’accueil promotionnelle interne.
- [x] Créer la landing page React responsive, animée et conforme à l’univers visuel Threnyx.
- [x] Vérifier la compatibilité de l’onboarding avec WebAuthn PRF et le verrouillage du coffre.
- [x] Créer le dépôt GitHub dédié et publier la landing page.
- [x] Ajouter le workflow GitHub Actions qui compile la landing React et la publie sur GitHub Pages.
- [x] Vérifier l’URL GitHub Pages après son premier déploiement.
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
- [x] Mettre à jour la landing avec des contenus SEO utiles et vérifiables, sans promesses d’anonymat excessives.
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

- [x] Vérifier publiquement HTTPS que GitHub Pages sert le service worker `threnyx-pwa-v20`.
- [ ] Tester sur appareil la configuration du code de détresse et son déclenchement sans ouverture du coffre.
- [ ] Tester sur appareil l’entrée de code de détresse visible avec un coffre biométrique, sans exiger l’échec ou l’annulation de Face ID/empreinte.
- [ ] Vérifier sur appareil l’animation `panic-flame` et l’effacement local avant le rechargement.
- [x] Réduire et clarifier la barre supérieure et les actions du profil sur mobile afin d’éviter les collisions de gestes.
- [x] Moderniser l’interface de chat : alignement du lecteur vocal, détails visuels, contrôle flamme et cohérence des icônes.
- [x] Remplacer le sélecteur de portrait système par une action d’import cohérente avec le design et un état de fichier lisible.
- [x] Mettre à jour la typographie de la PWA avec une police locale ou fournie de manière sûre, inspirée des interfaces éditoriales sans dépendance distante au runtime.
- [x] Renforcer les animations, la hiérarchie visuelle et les appels à l’action de la landing sans exagérer les garanties de sécurité.
- [x] Diagnostiquer l’absence intermittente de média audio ou vidéo dans les appels WebRTC avec télémétrie locale, état des pistes et négociation ICE.
- [ ] Corriger les cas reproductibles d’appel WebRTC puis valider l’audio et la vidéo dans les deux sens sur deux appareils.
- [x] Ajouter une entrée distincte de code de détresse depuis l’écran verrouillé, y compris pour un coffre biométrique.
- [x] Remplacer le triple-tap par une flamme d’effacement local désactivée par défaut et configurable dans les réglages.
- [x] Simplifier la barre système et moderniser les surfaces de chat, le lecteur vocal, le sélecteur de portrait et la typographie locale.
- [x] Mettre à jour la landing avec la flamme configurable, le code de détresse biométrique et une animation de signal respectant les préférences de mouvement.
- [x] Retirer les transceivers WebRTC doublonnés, accepter les redémarrages ICE bidirectionnels et utiliser les flux distants négociés.
- [ ] Tester sur deux appareils la flamme activée/désactivée, le code de détresse biométrique, l’audio et la vidéo dans les deux sens après redémarrage ICE.

## Correction mobile finale — flamme et biométrie

- [ ] Tester sur Chrome Android l’icône flamme dans l’en-tête mobile après activation de la fonction.
- [ ] Tester sur Chrome Android le démarrage automatique Face ID/empreinte et le retour vers le choix de code après annulation/échec.
- [ ] Tester sur Chrome Android le démarrage biométrique automatique, l’annulation vers le choix de code et la visibilité de la flamme.

## Audit crypto et migration de session moderne demandés

- [x] Cartographier les primitives cryptographiques, les clés, IndexedDB, caches, service worker, transports Nostr/WebRTC, NFC et synchronisation existants.
- [x] Auditer les dépendances et documenter les scripts embarqués, le CSP, les accès stockage et les métadonnées réseau exposées.
- [x] Évaluer les implémentations navigateur réellement maintenues de Double Ratchet / X3DH et les limites de leur intégration PWA statique.
- [ ] Écrire et exécuter une suite de tests de propriétés de session avant toute modification du protocole de messages.
- [x] Écrire le modèle de menace et la spécification de migration versionnée sans modifier le protocole actif.
- [ ] Implémenter seulement les durcissements isolés validés par l’audit ; ne pas présenter l’application comme offrant forward secrecy ou post-compromise security avant validation complète.
- [x] Publier `SECURITY.md`, une documentation du protocole et un rapport d’audit avec risques corrigés et risques restants.
- [x] Ajouter un test de base CSP/chaîne de livraison/Nostr/coffre et supprimer la journalisation de l’objet d’erreur de démarrage.

## Remédiations de session et communication publique demandées

- [x] Inventorier tous les contrôles de sécurité restants demandés et les comparer à l’état réellement implémenté.
- [x] Rechercher les normes, modèles de session et bibliothèques maintenues compatibles avec une PWA statique et les contraintes Nostr.
- [x] Concevoir un pilote isolé de sessions à forward secrecy avec préclés, ratchet, anti-rejeu, persistance atomique et tests de propriétés.
- [x] Implémenter les garde-fous testés : aucune migration silencieuse, aucune réplique Constellation d’état ratcheté et aucune annonce de forward secrecy sans qualification.
- [x] Réviser la landing, les données structurées et la fiche destinée aux assistants IA avec les protections effectivement vérifiées et leurs limites.
- [ ] Intégrer un pilote MLS/Marmot seulement après version épinglée corrigée, suite entièrement verte, tests de propriétés automatisés et revue indépendante.

## Régression critique de démarrage v24

- [x] Reproduire le blocage CSP démontré : une requête same-origin vers le service worker échouait avec `TypeError: Failed to fetch` sous `connect-src wss: blob:`.
- [x] Corriger le défaut de démarrage avec le changement minimal, sans réduire la CSP ni les contrôles de coffre.
- [x] Republier la PWA v25 et vérifier l’ouverture publique avec le nouveau service worker et les requêtes same-origin autorisées.
- [ ] Ajouter une reproduction instrumentée du démarrage avec coffre existant et capture contrôlée d’une éventuelle exception de boot.
- [ ] Ajouter un test navigateur de non-régression PWA avec service worker existant et récupération same-origin sous la CSP active.
- [x] Documenter dans les tests et le rapport d’audit la nécessité de `connect-src 'self'` pour les ressources internes PWA.

## Régression v25 — parcours coffre et création de compte

- [x] Reproduire le blocage du bouton « Continuer » sur un profil neuf/incognito et relever l’erreur de boot associée : le hash CSP v25 ne correspondait plus au script inline modifié, donc aucun gestionnaire d’onboarding ne pouvait s’attacher.
- [x] Réparer le blocage commun de l’onboarding et de la détection du coffre en recalculant le hash CSP exact, sans effacer IndexedDB ni les identifiants WebAuthn.
- [ ] Ajouter un test couvrant les trois étapes de création de compte, le coffre existant et le choix de secours après annulation biométrique.
- [x] Publier le correctif v26 après validation locale et publique du passage étape 1 → étape 2, du hash CSP et du service worker.
- [ ] Vérifier sur Android avec le coffre réel que le démarrage retrouve bien l’identité existante, ouvre Face ID/empreinte automatiquement et propose le secours après annulation.
