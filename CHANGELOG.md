# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- 📝 **Intégration MDX complète**
  - Configuration des plugins MDX
  - Pages d'articles dynamiques
  - Syntax highlighting pour le code
  - Génération automatique de la table des matières

- 📊 **Analytics et monitoring**
  - Intégration Vercel Analytics
  - Métriques de performance
  - Tracking des événements utilisateur

- 🔍 **Recherche avancée**
  - Filtres par tags et catégories
  - Recherche dans le contenu des articles
  - Historique des recherches

- 💬 **Système de commentaires**
  - Intégration avec un service externe
  - Modération des commentaires
  - Notifications par email

## [0.3.0] - 2024-01-15

### Added
- ⚡ **Streaming et Suspense**
  - Implémentation du streaming avec React Suspense
  - Composants asynchrones pour le chargement progressif
  - Fallbacks élégants pour tous les composants
  - Amélioration de l'expérience utilisateur

- 🔄 **Pages de chargement**
  - `app/loading.tsx` - Page de chargement globale
  - `app/blog/loading.tsx` - Page de chargement spécifique au blog
  - `app/not-found.tsx` - Page 404 personnalisée
  - Design cohérent avec le thème de l'application

- 🎯 **Composants de chargement**
  - `LoadingSpinner.tsx` - Spinner réutilisable avec tailles configurables
  - `BlogPosts.tsx` - Composant avec streaming pour les articles
  - `SearchResults.tsx` - Résultats de recherche avec chargement progressif
  - Skeletons animés pour une meilleure UX

- 🎨 **Animations et transitions**
  - Animations de chargement avec `animate-pulse`
  - Transitions fluides entre les états
  - Effets visuels pour les interactions utilisateur
  - Feedback visuel pendant les opérations asynchrones

### Changed
- 🔧 **Architecture des composants**
  - Refactoring pour supporter le streaming
  - Séparation des composants synchrones et asynchrones
  - Amélioration de la structure des fallbacks
  - Optimisation des performances de chargement

- 📱 **Expérience utilisateur**
  - Chargement progressif du contenu
  - Feedback visuel immédiat
  - Réduction de la perception du temps de chargement
  - Interface plus réactive

### Technical Details
- **Composants créés :**
  - `components/LoadingSpinner.tsx`
  - `components/BlogPosts.tsx`
  - `components/SearchResults.tsx`

- **Pages créées :**
  - `app/loading.tsx`
  - `app/not-found.tsx`
  - `app/blog/loading.tsx`

- **Fonctionnalités streaming :**
  - Suspense boundaries pour le chargement progressif
  - Composants asynchrones avec fallbacks
  - Simulation de délais pour la démo
  - Gestion des états de chargement

## [0.2.0] - 2024-01-15

### Added
- ✨ **Recherche fuzzy** avec Fuse.js
  - Composant `Search.tsx` avec recherche en temps réel
  - Intégration dans le header
  - Recherche dans les titres et descriptions des articles
  - Interface utilisateur intuitive avec résultats en dropdown

- 🧭 **Breadcrumb sémantique**
  - Composant `Breadcrumb.tsx` avec navigation hiérarchique
  - Utilisation de `next/link` pour une navigation optimisée
  - Design responsive et accessible
  - Icônes Lucide React pour une meilleure UX

- 🧵 **Système de pagination**
  - Composant `Pagination.tsx` complet
  - Navigation intuitive avec boutons précédent/suivant
  - Affichage intelligent des pages avec ellipsis
  - Support des paramètres d'URL pour la pagination

- 📱 **Design responsive mobile-first**
  - Grilles adaptatives pour les articles
  - Header responsive avec recherche intégrée
  - Composants optimisés pour mobile et desktop
  - Utilisation de Tailwind CSS pour la responsivité

- ✍️ **Composants pour articles MDX**
  - `BlogCard.tsx` pour l'affichage des aperçus d'articles
  - Support des métadonnées (tags, temps de lecture, images)
  - Design moderne avec animations hover
  - Structure prête pour l'intégration MDX

- 💡 **Table des matières interactive**
  - Composant `TableOfContents.tsx` avec navigation automatique
  - Détection automatique des sections actives
  - Support des niveaux de titres hiérarchiques
  - Interface utilisateur intuitive

- 🎨 **Thème sombre/clair amélioré**
  - Utilisation de `next-themes` pour la gestion des thèmes
  - Composant `ModeToggle` avec dropdown (Light/Dark/System)
  - Styles cohérents pour les deux thèmes
  - Transitions fluides entre les thèmes

- 📄 **Pages de contenu**
  - Page d'accueil moderne avec section hero
  - Page blog avec pagination et filtres
  - Structure de données cohérente pour les articles
  - Navigation intuitive entre les pages

- 📚 **Documentation complète**
  - README.md détaillé avec guide d'installation
  - CHANGELOG.md avec historique des modifications
  - Documentation des composants et de l'architecture

### Changed
- 🔧 **Configuration Tailwind CSS**
  - Correction de l'importation Tailwind dans `globals.css`
  - Ajout du fichier `postcss.config.js`
  - Configuration du mode sombre avec `darkMode: "class"`

- 🏗️ **Structure du projet**
  - Réorganisation des composants dans le dossier `components/`
  - Amélioration de la structure des pages
  - Standardisation des interfaces TypeScript

- 📦 **Package.json**
  - Mise à jour vers la version 0.2.0
  - Ajout de scripts utiles (type-check, clean, analyze)
  - Métadonnées du projet complètes

### Fixed
- 🐛 **Erreurs de résolution Tailwind CSS**
  - Correction de l'erreur "Can't resolve 'tailwindcss'"
  - Installation correcte des dépendances PostCSS
  - Configuration appropriée des directives Tailwind

- 🔧 **Problèmes de configuration**
  - Résolution des erreurs de dépendances manquantes
  - Correction de la configuration Next.js
  - Amélioration de la stabilité du serveur de développement

### Technical Details
- **Dépendances ajoutées :**
  - `fuse.js` - Recherche fuzzy
  - `next-themes` - Gestion des thèmes
  - `@next/mdx` - Support MDX
  - `@mdx-js/loader` - Loader MDX
  - `@mdx-js/react` - Composants React pour MDX
  - `rehype-highlight` - Coloration syntaxique
  - `rehype-slug` - Génération automatique des IDs
  - `remark-toc` - Génération de table des matières

- **Composants créés :**
  - `components/Search.tsx`
  - `components/Breadcrumb.tsx`
  - `components/Pagination.tsx`
  - `components/TableOfContents.tsx`
  - `components/BlogCard.tsx`

- **Pages mises à jour :**
  - `app/page.tsx` - Page d'accueil
  - `app/blog/page.tsx` - Page blog
  - `components/Header.tsx` - Header avec recherche

## [0.1.0] - 2024-01-15

### Added
- 🚀 **Initialisation du projet**
  - Création du projet Next.js 14 avec App Router
  - Configuration TypeScript
  - Intégration Tailwind CSS
  - Configuration du thème sombre/clair de base

- 🎨 **Composants de base**
  - `Header.tsx` - Navigation principale
  - `Footer.tsx` - Pied de page
  - `ModeToggle.tsx` - Basculement de thème
  - `ThemeProvider.tsx` - Fournisseur de thème

- 🛠️ **Configuration**
  - Configuration Tailwind CSS
  - Configuration PostCSS
  - Configuration des composants UI (shadcn/ui)
  - Configuration du thème sombre

### Technical Details
- **Framework :** Next.js 14 avec App Router
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **Gestion des thèmes :** next-themes
- **Composants UI :** shadcn/ui

---

## Format du Changelog

### Types de modifications
- **Added** - Nouvelles fonctionnalités
- **Changed** - Modifications de fonctionnalités existantes
- **Deprecated** - Fonctionnalités qui seront supprimées
- **Removed** - Fonctionnalités supprimées
- **Fixed** - Corrections de bugs
- **Security** - Améliorations de sécurité

### Conventions
- Utilisation d'emojis pour une meilleure lisibilité
- Description détaillée des fonctionnalités
- Section "Technical Details" pour les détails techniques
- Respect du format Keep a Changelog 