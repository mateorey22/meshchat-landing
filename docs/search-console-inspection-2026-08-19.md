# Inspection Google Search Console — landing Threnyx

**Propriété inspectée :** `https://mateorey22.github.io/threnyx-landing/`  
**Date de lecture :** 19 août 2026  
**Source :** [Google Search Console — Inspection d’URL](https://search.google.com/search-console/inspect?resource_id=https%3A%2F%2Fmateorey22.github.io%2Fthrenyx-landing%2F)

## Résultat constaté

Google Search Console indique explicitement **« URL is on Google »** et **« Page is indexed »** pour l’URL canonique de la landing. La page est également indiquée comme servie en HTTPS.

Les détails affichés par l’inspection indiquent que Googlebot smartphone a réussi la récupération de la page lors de sa dernière exploration, le **15 août 2026 à 23:13:23**, et que l’exploration ainsi que l’indexation sont autorisées. Google n’a cependant pas encore attribué de page référente rapportée et affiche **« Temporary processing error »** pour la découverte par sitemap. Cette erreur n’empêche pas l’indexation actuelle, mais justifie de vérifier la soumission et le traitement du sitemap séparément.

## Vérification de la soumission du sitemap

Le rapport **Sitemaps** de la propriété URL `https://mateorey22.github.io/threnyx-landing/` ne contient actuellement **aucun sitemap soumis**. Le fichier public `https://mateorey22.github.io/threnyx-landing/sitemap.xml` existe et est valide côté site, mais Google ne le suit pas encore depuis Search Console. Cette absence explique le statut temporaire de découverte par sitemap et réduit la vitesse à laquelle les changements récents sont repris.

Le problème signalé n’est donc pas une désindexation technique de cette URL. Une requête Google `site:` peut être incomplète ou variable, et l’absence de clic/impression dans le rapport ne prouve pas qu’une page est exclue. La Search Console affichait encore un traitement de données en cours, avec zéro clic de recherche dans la période visible.

## Action à envisager

La page affiche l’action **« Request indexing »** car elle a récemment changé. Cette soumission est une demande explicite à Google ; elle ne doit être déclenchée qu’après confirmation du propriétaire. Elle peut accélérer une nouvelle exploration, sans garantir ni délai fixe ni position dans les résultats.

## Actions confirmées par le propriétaire

Après confirmation explicite du propriétaire, le **19 août 2026** :

1. `sitemap.xml` a été soumis dans la propriété Search Console. Google a confirmé la soumission ; l’état initial « Couldn’t fetch » est susceptible d’être transitoire pendant le premier traitement.
2. Le test d’URL en direct a été validé, puis Google a affiché **« Indexing requested »** : l’URL a été ajoutée à la file de crawl prioritaire.

Ces deux actions ne garantissent ni une durée de traitement ni un positionnement. Elles demandent à Google de reprendre les dernières métadonnées, le favicon, le fallback HTML et les données structurées déjà déployés.
