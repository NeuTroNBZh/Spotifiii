# Spotifiii

> Projet d'étude — reproduction de l'interface Spotify (page d'accueil et lecteur), réalisée dans le cadre du BTS SIO SLAM.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[Démo en ligne](https://demo-spotifiii.neutronbzh.fr)

## À propos

**Spotifiii** reproduit l'interface visuelle de Spotify : page d'accueil avec navigation par catégories et carrousels d'albums, et une page lecteur avec contrôles audio (lecture, progression, temps écoulé).

**Ce n'est pas un projet destiné à évoluer** — il est publié tel quel, pour être consultable comme exemple de mon travail.

## Fonctionnalités

- Page d'accueil : navigation par genres, carrousels d'albums défilables (glisser à la souris)
- Page lecteur (`playeur.html`) : lecture/pause, barre de progression, affichage du temps

## Stack technique

100% front-end statique, sans backend ni base de données.

| Techno | Usage |
|--------|-------|
| HTML5 | Structure |
| CSS3 | Mise en forme, responsive |
| JavaScript vanilla | Interactions (lecteur audio, défilement, navigation) |

## Structure du projet

```
Spotifiii/
├── index.html          # Page d'accueil
├── playeur.html         # Page lecteur
└── assets/
    ├── css/             # Feuilles de style
    ├── js/               # Scripts (lecteur audio, navigation)
    └── img/              # Pochettes d'albums, icônes
```

## Lancer en local

Site statique, aucune installation nécessaire :

```bash
git clone https://github.com/NeuTroNBZh/Spotifiii.git
cd Spotifiii
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Licence

Projet scolaire, publié à titre de portfolio sous licence MIT (voir [LICENSE](LICENSE)). Spotify et son logo sont des marques déposées de Spotify AB ; ce projet n'y est pas affilié.
