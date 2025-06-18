# 🚀 Blog Eurin HASH

Un blog technique moderne et performant pour Eurin HASH, hébergé sur `blog.eurinhash.com`, utilisant **Next.js 14 (App Router)** et déployé sur **Vercel**.

## ✨ Fonctionnalités

- 🔍 **Recherche fuzzy** avec Fuse.js
- 🧭 **Breadcrumb sémantique** avec `next/link`
- 🧵 **Pagination** intelligente
- 📱 **Responsive mobile-first** (Tailwind CSS)
- ✍️ **Articles en MDX** avec TOC & Syntax highlighting
- 💡 **Thème clair/sombre** (`next-themes`)
- 📊 **Prêt pour Analytics** (Vercel ou Plausible)

## 🛠️ Stack Technique

| Composant           | Technologie choisie           |
|---------------------|-------------------------------|
| Framework Frontend  | Next.js 14+ (App Router)      |
| Langage             | TypeScript                    |
| Contenu             | MDX (Markdown + JSX)          |
| Design & UI         | Tailwind CSS + Lucide React   |
| Gestion du thème    | next-themes (dark/light mode) |
| Déploiement         | Vercel                        |
| Recherche           | Fuse.js                       |
| Package Manager     | pnpm                          |

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/blog-eurinhash.git
cd blog-eurinhash

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Le site sera accessible sur `http://localhost:50000`

### Scripts Disponibles

```bash
# Développement
pnpm dev              # Serveur avec Turbopack
pnpm dev:standard     # Serveur standard Next.js

# Build & Production
pnpm build           # Build de production
pnpm start           # Démarrer en production

# Qualité du code
pnpm lint            # Vérifier le code
pnpm lint:fix        # Corriger automatiquement
pnpm type-check      # Vérifier les types TypeScript

# Maintenance
pnpm clean           # Nettoyer les caches
pnpm analyze         # Analyser le bundle
```

## 📁 Structure du Projet

```
blog-eurinhash/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── blog/
│       └── page.tsx       # Page blog
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── Header.tsx        # Navigation principale
│   ├── Footer.tsx        # Pied de page
│   ├── Search.tsx        # Recherche fuzzy
│   ├── BlogCard.tsx      # Carte d'article
│   ├── Pagination.tsx    # Pagination
│   ├── Breadcrumb.tsx    # Navigation hiérarchique
│   ├── TableOfContents.tsx # Table des matières
│   └── mode-toggle.tsx   # Basculement de thème
├── content/              # Contenu MDX (à créer)
│   └── blog/
├── public/               # Assets statiques
├── lib/                  # Utilitaires
├── configs/              # Configurations
└── README.md
```

## 🎨 Composants Principaux

### 🔍 Search.tsx
Recherche fuzzy en temps réel avec Fuse.js :
- Recherche dans les titres et descriptions
- Interface dropdown intuitive
- Résultats en temps réel

### 🧭 Breadcrumb.tsx
Navigation hiérarchique sémantique :
- Utilisation de `next/link` pour l'optimisation
- Design responsive
- Accessibilité intégrée

### 🧵 Pagination.tsx
Système de pagination complet :
- Navigation intuitive
- Affichage intelligent des pages
- Support des paramètres d'URL

### 📱 BlogCard.tsx
Carte d'article moderne :
- Support des métadonnées (tags, temps de lecture)
- Design responsive
- Animations hover

## 🎯 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
# Analytics (optionnel)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# MDX (optionnel)
NEXT_PUBLIC_MDX_ENABLED=true
```

### Tailwind CSS

Le projet utilise Tailwind CSS avec :
- Mode sombre configuré
- Couleurs personnalisées
- Composants UI optimisés

### Thème Sombre/Clair

Géré par `next-themes` avec :
- Détection automatique du thème système
- Persistance des préférences
- Transitions fluides

## 📝 Format MDX

Les articles utilisent le format MDX :

```mdx
---
title: "Titre de l'article"
description: "Description SEO"
date: "2024-01-15"
author: "Eurin HASH"
cover: "/images/cover.jpg"
tags: ["tag1", "tag2"]
readingTime: "5 min"
---

## Introduction

Contenu en **Markdown**...

<CustomComponent />  # Intégration composants React
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Configurez le domaine `blog.eurinhash.com`
3. Activez Vercel Analytics (optionnel)

### Variables d'Environnement Vercel

```env
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🔧 Développement

### Ajouter un Nouvel Article

1. Créez un fichier `.mdx` dans `content/blog/`
2. Ajoutez les métadonnées frontmatter
3. Écrivez votre contenu en Markdown/MDX

### Créer un Nouveau Composant

1. Créez le fichier dans `components/`
2. Utilisez TypeScript pour les props
3. Ajoutez les styles Tailwind
4. Testez en mode sombre/clair

### Personnaliser le Design

- Modifiez `tailwind.config.ts` pour les couleurs
- Ajustez `app/globals.css` pour les styles globaux
- Utilisez les composants UI de base dans `components/ui/`

## 📊 Performance

Le projet est optimisé pour :
- **Core Web Vitals** excellents
- **SEO** optimisé
- **Accessibilité** conforme WCAG
- **Mobile-first** design

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Eurin HASH**
- Blog: [blog.eurinhash.com](https://blog.eurinhash.com)
- GitHub: [@eurinhash](https://github.com/eurinhash)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Lucide React](https://lucide.dev/) - Icônes
- [Fuse.js](https://fusejs.io/) - Recherche fuzzy

---

⭐ Si ce projet vous aide, n'hésitez pas à le star sur GitHub !
