# Recherche — synchronisation décentralisée Threnyx

## Nostr : publication, état applicatif et confidentialité

NIP-78 définit les événements `30078` (adressables) et `78` (multiples) comme une base de données applicative pour des clients qui ne cherchent pas l’interopérabilité. La spécification envisage explicitement un usage de type remote storage, avec les relais Nostr choisis par l’utilisateur. Le contenu et les tags ne sont pas chiffrés par NIP-78 lui-même ; Threnyx doit donc chiffrer chaque charge utile avant publication.

NIP-44 v2 offre un format de chiffrement fondé sur ECDH secp256k1, HKDF, ChaCha20 et HMAC-SHA256. La spécification avertit que ce schéma n’apporte ni forward secrecy, ni post-compromise security, ni protection parfaite des métadonnées face aux relais. Il ne doit donc pas être le seul mécanisme de sauvegarde de l’identité.

NIP-59 encapsule un événement chiffré dans une enveloppe cadeau afin de réduire l’exposition des métadonnées. Les événements `1059` sont prévus pour la livraison asynchrone et peuvent être conservés par les relais ; certaines politiques de relais peuvent toutefois les supprimer ou demander une authentification.

Sources :

- <https://raw.githubusercontent.com/nostr-protocol/nips/master/78.md>
- <https://raw.githubusercontent.com/nostr-protocol/nips/master/44.md>
- <https://raw.githubusercontent.com/nostr-protocol/nips/master/59.md>

### Test réseau Threnyx — 15 août 2026

Un test en lecture seule, sans événement publié, a envoyé une requête Nostr `REQ` pour le type `78` sur les cinq relais actuellement configurés. `wss://nos.lol`, `wss://relay.primal.net` et `wss://nostr.mom` ont répondu par `EOSE` en environ 2,9 à 3,4 secondes. `wss://relay.damus.io` a échoué au niveau socket et `wss://relay.nostr.band` n’a pas répondu avant le délai de 7 secondes. Le résultat confirme qu’une synchronisation Threnyx doit exiger des accusés de réception de plusieurs relais et ne jamais considérer un seul relais comme une sauvegarde suffisante.

## IPFS / Helia : adressage de contenu, pas garantie de rétention

Helia est une implémentation JavaScript modulaire d’IPFS utilisable dans les navigateurs. Elle peut stocker des objets adressés par contenu et s’appuie selon sa configuration sur Bitswap, DHT, routage délégué et passerelles HTTP. Cela rend IPFS utile pour vérifier l’intégrité de gros objets chiffrés et dédupliquer des fragments.

La documentation IPFS est explicite : le réseau rend un contenu découvrable mais ne garantit pas qu’il reste disponible. Sans nœud conservant le contenu ou épinglage, les données peuvent être supprimées par garbage collection. Les services de pinning apportent de la disponibilité mais deviennent des tiers d’hébergement ; ils ne satisfont donc pas, seuls, l’objectif sans serveur central de Threnyx.

Sources :

- <https://docs.ipfs.tech/concepts/persistence/>
- <https://ipfs.github.io/helia/>
- <https://docs.ipfs.tech/how-to/work-with-pinning-services/>

## Hypercore : journal répliqué, mais runtime P2P à évaluer pour la PWA

Hypercore est un journal append-only signé, avec lectures vérifiées, réplication partielle et chiffrement optionnel de blocs. Les documents décrivent une réplication directe entre pairs via un flux de protocole et une découverte par Hyperswarm DHT. Ses propriétés de journal sont inspirantes pour les manifestes et l’intégrité ; toutefois, l’expérience documentée cible surtout des stockages locaux de runtime et une connectivité P2P spécialisée. Son adoption directe ne doit pas être supposée transparente dans une PWA GitHub Pages.

Sources :

- <https://docs.pears.com/reference/building-blocks/hypercore/>
- <https://hypercore-protocol.github.io/new-website/>
- <https://github.com/holepunchto/hypercore>

## Web NFC : amorçage physique, pas coffre matériel

Web NFC permet aux pages HTTPS de lire et d’écrire des messages NDEF depuis Chrome Android dans le cadre d’un geste utilisateur. Les opérations bas niveau (ISO-DEP, émulation de carte, accès sécurisé propriétaire) ne sont pas disponibles. Un tag NDEF ordinaire est assimilable à une note lisible et modifiable ; il est donc clonable s’il contient un secret récupérable.

Une clé NFC Threnyx doit uniquement porter un paquet de récupération chiffré et une référence de manifeste. La possession physique du tag ne peut pas constituer, seule, une preuve d’identité ; elle doit être combinée à une confirmation utilisateur, une authentification biométrique du nouvel appareil et une possibilité de révocation.

Sources :

- <https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API>
- <https://developer.chrome.com/docs/capabilities/nfc>
- <https://developer.mozilla.org/en-US/docs/Web/API/NDEFReader>
