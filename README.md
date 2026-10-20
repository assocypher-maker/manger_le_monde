# Manger le monde

**L’IA générative au cœur du projet technofasciste** est un mémoire de Lisa Blondel (2026), publié en accès libre sous licence [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr).

Ce dépôt contient le site de présentation : le PDF à télécharger, les sources citées et des ressources pour aller plus loin. Le site est entièrement statique. Il n’utilise aucun cookie, aucun traceur et aucune police chargée depuis un service tiers.

## Mettre le site en ligne avec GitHub Pages

1. Créez un dépôt public sur GitHub, par exemple `manger-le-monde`.
2. Déposez-y **le contenu** de ce dossier, avec `index.html` à la racine. Le plus simple est le bouton *Add file → Upload files*, en glissant tous les fichiers et dossiers.
3. Dans le dépôt, ouvrez *Settings → Pages*. Sous *Build and deployment*, choisissez *Deploy from a branch*, puis la branche `main` et le dossier `/ (root)`, et enregistrez.
4. Une à deux minutes plus tard, le site est en ligne à l’adresse `https://<votre-nom>.github.io/manger-le-monde/`.

Le fichier `.nojekyll` (vide) est voulu : il dit à GitHub de servir les fichiers tels quels.

> Si vous préférez ne pas dépendre de GitHub, qui appartient à Microsoft, le même dossier fonctionne tel quel sur **Codeberg Pages**, hébergement associatif européen, ou sur n’importe quel hébergeur de fichiers statiques.

## Organisation

```
index.html                  la page unique du site
assets/style.css            mise en page (noir et blanc, mode sombre automatique)
assets/app.js               filtre des sources et bouton « copier la référence »
assets/fonts/               Spectral et IBM Plex Sans, licence SIL OFL
assets/img/                 aperçus des pages, badge CC, image de partage
telechargements/            le PDF et les sources LaTeX du livre
favicon.svg
```

## Modifier le contenu

- **Remplacer le PDF** : déposez la nouvelle version sous le même nom, `telechargements/manger-le-monde.pdf`. Pensez à mettre à jour la taille du fichier affichée dans `index.html` (cherchez « Ko »).
- **Ajouter une source** : copiez un bloc `<li data-chap="II">…</li>` dans la section *Sources* de `index.html`, puis changez le lien, le titre et l’origine. L’attribut `data-chap` (I, II, III ou IV) sert au filtre par chapitre.
- **Ajouter une ressource** : copiez un bloc `<li><a href="…">…</a><p>…</p></li>` dans la section *Pour aller plus loin*.

## Licences

- Texte du mémoire : CC BY-NC 4.0, © Lisa Blondel.
- Polices : Spectral (Production Type) et IBM Plex Sans (IBM), sous licence SIL Open Font License. Les textes des licences sont dans `assets/fonts/`.
