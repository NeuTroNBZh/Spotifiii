# 🎵 Spotifiii

> Clone de Spotify - Projet d'étude développé dans le cadre de la formation BTS SIO SLAM

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

## 📋 Description

**Spotifiii** est une reproduction fonctionnelle de l'interface et des fonctionnalités principales de Spotify, développée comme projet pédagogique. L'objectif était de maîtriser les technologies web front-end et back-end en recréant une application de streaming musical complète.

### ✨ Fonctionnalités implémentées

- 🔐 **Authentification utilisateur** : Inscription, connexion, gestion de profil
- 🎶 **Lecture audio** : Lecteur fonctionnel avec contrôles (play/pause, volume, progression)
- 📂 **Gestion de playlists** : Création, modification, suppression de playlists personnelles
- 🔍 **Recherche** : Recherche de titres, artistes et albums
- ❤️ **Favoris** : Ajout de morceaux aux favoris
- 📱 **Responsive design** : Interface adaptée aux écrans desktop et mobile
- 🎨 **UI fidèle** : Reproduction pixel-perfect de l'interface Spotify

## 🛠️ Stack Technique

| Couche | Technologie |
|--------|-------------|
| **Front-end** | HTML5, CSS3, JavaScript vanilla |
| **Back-end** | PHP 8.x |
| **Base de données** | MySQL |
| **Serveur** | Apache |

## 🚀 Installation

### Prérequis

- PHP 8.0 ou supérieur
- MySQL 5.7 ou supérieur
- Serveur Apache avec mod_rewrite activé

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/NeuTroNBZh/Spotifiii.git
   cd Spotifiii
   ```

2. **Configurer la base de données**
   ```bash
   mysql -u root -p < database/schema.sql
   ```

3. **Configurer l'application**
   ```bash
   cp config/config.example.php config/config.php
   # Éditer config/config.php avec vos paramètres de base de données
   ```

4. **Lancer le serveur**
   ```bash
   php -S localhost:8000
   ```

5. **Accéder à l'application**
   
   Ouvrir `http://localhost:8000` dans votre navigateur

## 📁 Structure du projet

```
Spotifiii/
├── assets/
│   ├── css/          # Feuilles de style
│   ├── js/           # Scripts JavaScript
│   └── images/       # Images et icônes
├── config/           # Fichiers de configuration
├── database/         # Scripts SQL
├── includes/         # Fonctions et classes PHP
├── pages/            # Pages de l'application
├── uploads/          # Fichiers uploadés (pochettes d'album)
└── index.php         # Point d'entrée
```

## 🎯 Objectifs pédagogiques

Ce projet a permis de travailler sur :

- La manipulation du DOM avec JavaScript
- Les requêtes AJAX pour une expérience utilisateur fluide
- La gestion de sessions et l'authentification sécurisée en PHP
- La conception et l'optimisation de bases de données relationnelles
- L'intégration responsive et les animations CSS
- L'architecture MVC simplifiée

## 📸 Captures d'écran

*À venir*

## 📝 Licence

Ce projet est réalisé dans un cadre éducatif. Spotify et son logo sont des marques déposées de Spotify AB.

## 👤 Auteur

**Louis C.** - [@NeuTroNBZh](https://github.com/NeuTroNBZh)

---

*Projet développé dans le cadre du BTS SIO option SLAM*
