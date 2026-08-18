# Diagnostic d’indexabilité Google — landing Threnyx

**Date d’audit :** 18 août 2026. Ce document distingue les signaux publics vérifiables de l’état réel de l’index Google, qui ne peut être confirmé avec précision que dans la Search Console du propriétaire.

## Constat public

| Contrôle | Résultat observé | Conclusion |
|---|---|---|
| Recherche Google `site:mateorey22.github.io/threnyx-landing/` | Aucun document retourné lors de l’audit | La page n’est pas actuellement visible par cette requête ; cela ne donne pas le motif d’exclusion. |
| Réponse de la page canonique | HTTP `200`, HTTPS, sans redirection | Aucun blocage serveur observé. |
| Directives d’exploration | `robots.txt` autorise `Googlebot`; le HTML contient `index, follow` et aucun `noindex` | Aucun blocage robots observé. |
| Canonique et sitemap | URL canonique cohérente ; sitemap accessible et date `lastmod` actualisée au 18 août 2026 | Le chemin officiel de découverte est cohérent. |
| HTML initial | Le shell React ne contenait initialement qu’un `div#root` vide | Ce modèle oblige les robots à attendre le rendu JavaScript avant de voir le contenu principal. |

## Correction appliquée

Un contenu essentiel et lisible est maintenant présent dans le HTML initial : nom de marque, titre H1, description du produit, standards Nostr actifs et liens vers l’application et les contrôles. React remplace ensuite ce fallback avec l’expérience complète. Cette approche ne promet pas l’indexation, mais réduit la dépendance du robot au rendu JavaScript et améliore la découvrabilité pour les crawlers qui ne l’exécutent pas.

Google peut rendre les applications JavaScript, mais l’indexation intervient après les phases de crawl et de rendu ; un shell initialement vide peut donc retarder la compréhension du contenu. Google recommande par ailleurs des titres, descriptions et canoniques cohérents dans le HTML initial.[1]

## Étape indispensable dans Search Console

L’absence de résultat Google public ne permet pas de déterminer si l’URL est inconnue, exclue comme doublon, affectée par une action manuelle, ou simplement en attente. Dans la propriété **https://mateorey22.github.io/**, il faut inspecter précisément :

`https://mateorey22.github.io/threnyx-landing/`

Exécuter ensuite **Tester l’URL publiée**. Si le test est indexable, demander l’indexation une seule fois et soumettre/actualiser le sitemap. La Search Console indique que cette demande ne garantit pas l’inclusion et que l’exploration peut prendre de quelques jours à quelques semaines.[2] [3]

> Ne pas multiplier les demandes d’indexation : Google applique un quota et les répétitions ne font pas explorer l’URL plus vite.[3]

## Références

[1] [Google Search Central — JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

[2] [Google Search Console Help — URL Inspection tool](https://support.google.com/webmasters/answer/9012289?hl=en)

[3] [Google Search Central — Ask Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
