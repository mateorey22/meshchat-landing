# Favicon de la landing Threnyx et résultats Google

La landing référence désormais des favicons locaux à la racine du site, au lieu de dépendre uniquement d’une image CDN. Cette distinction est importante : l’image du logo dans le contenu de la page ne suffit pas à fournir le favicon utilisé dans les résultats de recherche.

Google indique qu’un favicon destiné aux résultats doit être carré, avec un rapport 1:1, et mesurer au moins 8 × 8 pixels ; une taille supérieure est recommandée. Le site et le fichier favicon doivent rester explorables, et Google peut mettre du temps à actualiser l’icône après une modification.[1]

Threnyx fournit donc `favicon.ico`, des PNG 48, 96 et 144 pixels, ainsi que des icônes de manifeste 192 et 512 pixels. Le HTML expose `rel=icon`, `apple-touch-icon` et `manifest`, tandis que `WebSite` et `WebApplication` déclarent le même logo 512 pixels. Les fichiers sont servis depuis le domaine GitHub Pages de la landing, ce qui évite une dépendance externe pour l’icône de recherche.

Cette correction améliore les signaux disponibles pour Google, mais ne force pas immédiatement l’affichage du logo : l’indexation, le recrawl et le cache de Google restent indépendants du déploiement GitHub Pages. Une nouvelle exploration peut être demandée dans Search Console après publication.

## Référence

[1] [Google Search Central — Define a favicon for search results](https://developers.google.com/search/docs/appearance/favicon-in-search)
