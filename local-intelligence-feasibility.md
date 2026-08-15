# Faisabilité des capacités locales Threnyx

Date de recherche : 15 août 2026.

## Résumé de décision

| Capacité | Faisabilité web actuelle | Décision produit |
|---|---|---|
| Sous-titres et traduction d’appel | Réalisable de façon progressive avec reconnaissance locale disponible, puis traduction texte locale ; dépend du navigateur et des packs de langues. | Intégrer une couche de sous-titres locale et une architecture de traduction optionnelle, sans revendiquer une traduction universelle immédiate. |
| Assistant local WebGPU | Réalisable sur navigateur WebGPU avec modèle quantifié téléchargé à la demande ; incompatible ou lourd sur certains appareils. | Intégrer le mode et le contrôle de compatibilité, avec chargement explicite et repli sans IA. |
| Filtres AR | Réalisable avec MediaPipe Face Landmarker et canvas local ; les traitements synchrones exigent un worker pour ne pas gêner l’appel. | Préparer un module de filtre local opt-in, à ne pas activer par défaut. |
| Recherche sémantique chiffrée | Réalisable avec embeddings locaux, cosinus et stockage IndexedDB chiffré. | Priorité fonctionnelle élevée après l’assistant : modèle d’embeddings plus léger qu’un LLM et bénéfice direct à l’historique. |
| Détection deepfake vocal | Prototype local possible, mais fiabilité insuffisante dans les appels réels et les modèles évoluent vite. | Ne pas présenter comme protection fiable ; réserver à une alerte expérimentale après évaluation dédiée. |
| Proximité BLE | Partiellement disponible, expérimentale et non compatible de façon uniforme ; nécessite permission et périphérique BLE sélectionné. | Ne pas intégrer comme détection automatique familiale. Conserver QR/NFC comme échange de proximité fiable. |

## Architecture retenue

1. Toutes les IA sont optionnelles et ne chargent aucun modèle sans action explicite.
2. Le navigateur vérifie WebGPU, mémoire et mode économie de données avant tout téléchargement.
3. Les modèles sont traités localement dans un worker lorsque c’est possible ; les messages, audio et vidéo ne sont pas transmis à un serveur d’inférence par l’application.
4. Les fonctions non disponibles restent invisibles ou affichent une explication courte avec une solution de repli.
5. Les promesses de la landing ne mentionnent que les modules effectivement livrés, et qualifient toute alerte deepfake comme expérimentale.

## Contraintes confirmées pour l’assistant navigateur

L’API Prompt de Chrome peut exposer un modèle local (Gemini Nano) après une action de l’utilisateur et un téléchargement initial. Sa documentation indique toutefois que les API de modèle de fondation ne sont pas actuellement disponibles sur Chrome Android ou iOS ; elles visent les postes compatibles disposant notamment d’espace libre et de ressources suffisantes. Le laboratoire Threnyx doit donc tester `LanguageModel.availability()`, expliciter l’état de téléchargement et offrir un repli sans IA, ce qui est l’architecture appliquée dans la PWA.

## Limite deepfake confirmée

Les travaux de recherche sur la détection de deepfake vocal en temps réel montrent une dégradation sensible des modèles entraînés sur des clips statiques lorsqu’ils sont confrontés aux flux continus, bruités et compressés d’une plateforme de communication. Une telle fonction ne doit donc être affichée que comme signal expérimental, jamais comme authentification de voix ou preuve de fraude.

## Contrôle de compatibilité de développement

Le navigateur de test expose WebGPU mais ne propose pas de modèle de langage intégré (`LanguageModel` retourne indisponible). L’import dynamique du module WebLLM lancé directement depuis la console de développement a échoué avant tout téléchargement de modèle, alors qu’une requête réseau depuis la page reçoit bien une réponse JavaScript CORS valide du CDN. Le chargement doit donc être validé dans le flux réel de la PWA, après action utilisateur, et ne peut pas être annoncé comme confirmé par le test isolé de console.

## Sources techniques

1. [MDN — Web Speech API et reconnaissance locale](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
2. [Transformers.js — inférence navigateur, WebGPU et tâches supportées](https://huggingface.co/docs/transformers.js/en/index)
3. [WebLLM — inférence LLM locale dans le navigateur](https://webllm.mlc.ai/docs/)
4. [MediaPipe — Face Landmarker pour le Web](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/web_js)
5. [ONNX Runtime Web — exécution locale WebGPU, WebGL, WebNN ou WASM](https://onnxruntime.ai/docs/tutorials/web/)
6. [Audio Deepfake Detection: What Has Been Achieved and What Lies Ahead](https://pmc.ncbi.nlm.nih.gov/articles/PMC11991371/)
7. [MDN — Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
8. [Chrome for Developers — Prompt API](https://developer.chrome.com/docs/ai/prompt-api)
9. [Chrome for Developers — Built-in AI requirements](https://developer.chrome.com/docs/ai/get-started)
10. [Real-time deepfake audio detection in communication platforms](https://arxiv.org/html/2403.11778v1)
