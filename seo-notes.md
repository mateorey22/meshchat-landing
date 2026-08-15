# Notes SEO — MeshChat Landing

La landing doit rester entièrement accessible à l’exploration : aucun `noindex`, aucune ressource de rendu bloquée et un `robots.txt` à la racine avec un sitemap déclaré. Google précise que `robots.txt` gère l’accès d’exploration mais ne garantit ni inclusion ni exclusion de l’index ; les pages doivent donc rester publiques et comporter des signaux HTML explicites.[1]

Le sitemap définit l’URL canonique importante du site et aide les moteurs à la découvrir, sans garantir une indexation.[2] La landing utilise aussi un balisage JSON-LD exact et visible à l’utilisateur : Google recommande ce format pour donner des indices explicites sur le contenu et sa nature.[3]

Pour les assistants OpenAI, le fichier `robots.txt` autorise explicitement `OAI-SearchBot`, qui est le robot destiné aux résultats de recherche de ChatGPT, et `GPTBot`, qui concerne l’entraînement des modèles. Ces deux autorisations servent des finalités distinctes.[4]

## Références

[1] [Google Search Central — Introduction à robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

[2] [Google Search Central — Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

[3] [Google Search Central — Données structurées](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

[4] [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)
