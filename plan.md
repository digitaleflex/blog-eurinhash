Voici la version transformée en Markdown propre pour une utilisation immédiate :

```markdown
# 📘 Projet : blog.eurinhash.com

## 🎯 Objectif
Développer un **blog technique moderne et performant** pour Eurin HASH, hébergé sur `blog.eurinhash.com`, utilisant **Next.js 14 (App Router)** et déployé sur **Vercel**.  
Inspiré du design du [blog de Vercel](https://vercel.com/blog), ce blog servira de vitrine pour des articles sur l'architecture cloud, la cybersécurité, le développement web, l'intelligence numérique et les retours d'expérience.

---

## 🧱 Stack technique
| Composant           | Technologie choisie           |
|---------------------|-------------------------------|
| Framework Frontend  | Next.js 14+ (App Router)      |
| Langage             | TypeScript                    |
| Contenu             | MDX (Markdown + JSX)          |
| Design & UI         | Tailwind CSS + framer-motion  |
| Gestion du thème    | next-themes (dark/light mode) |
| Déploiement         | Vercel                        |
| SEO                 | next/metadata ou next-seo     |
| Analytics           | Vercel Analytics ou Plausible |
| Cache               | Redis + SWR                   |
| Monitoring          | Sentry + Vercel Analytics     |

---

## 🧑‍🎨 Design & Expérience Utilisateur (UX/UI)
Design **moderne, minimaliste, technique** inspiré du blog [Vercel](https://vercel.com/blog).

### 🌙 Thème sombre et clair
- Détection automatique du thème via `prefers-color-scheme`
- Switch manuel via un bouton `ThemeToggle`

### 📐 Typographie
- Police principale : `Geist Sans` ou `Inter` (via `@next/font/google`)
- Grilles fluides avec Tailwind (`grid`, `space-y`, `gap-x`, `gap-y`)

### 🧩 Composants clés
| Composant         | Rôle                                                   |
|-------------------|--------------------------------------------------------|
| `Header.tsx`      | Menu principal + navigation                            |
| `Footer.tsx`      | Liens sociaux + copyright                              |
| `BlogCard.tsx`    | Aperçu article (image, titre, date)                    |
| `MDXRenderer.tsx` | Affichage riche du contenu MDX                         |
| `ThemeToggle.tsx` | Bouton changement thème clair/sombre                   |

### 📱 Responsive Design
- Approche mobile-first
- Grille adaptative pour articles
- Menu hamburger sur mobile

### ✨ Animation
- Transitions avec `framer-motion`
- Effets hover sur cartes
- Apparition progressive au scroll

---

## 📁 Structure du projet
```
blog-eurinhash/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Accueil (articles récents)
│   └── blog/
│       ├── page.tsx            # Archive articles
│       └── [slug]/
│           └── page.tsx        # Article dynamique
├── content/
│   └── blog/                   # Contenu MDX
├── components/                 # Composants React
├── public/                     # Assets statiques
├── styles/
│   └── globals.css             # Styles globaux
├── configs/                    # Fichiers de configuration
└── README.md
```

---

## ✍️ Format MDX
````mdx
---
title: "Titre article"
description: "Description SEO"
date: "YYYY-MM-DD"
author: "Eurin HASH"
cover: "/images/cover.jpg"
tags: ["tag1", "tag2"]
---

## Introduction
Contenu en **Markdown**...

<CustomComponent />  # Intégration composants React
````

---

## 🔍 Fonctionnalités
- [x] Blog MDX dynamique
- [x] Thème clair/sombre
- [x] Design Vercel-like
- [x] Animations fluides
- [x] SEO optimisé
- [ ] Recherche plein texte
- [ ] Pagination
- [ ] Système de commentaires
- [ ] Versioning des articles
- [ ] Système de réactions

## 🛡️ Sécurité
- Content Security Policy (CSP)
- Configuration CORS
- Protection contre les attaques XSS
- Rate limiting
- Backup automatique du contenu
- Authentification pour l'admin

## 📊 Performance & Monitoring
- Mise en cache avec Redis
- Optimisation des images (next/image)
- Lazy loading des composants
- Monitoring avec Sentry
- Métriques de performance (Core Web Vitals)
- Alertes automatiques

## 📝 Gestion du Contenu
- Versioning des articles (Git)
- Système de brouillons
- Éditeur WYSIWYG pour l'admin
- Gestion des médias
- Système de tags et catégories
- API pour le contenu

---

## 🚀 Déploiement
1. Lier GitHub à Vercel
2. Configurer domaine `blog.eurinhash.com`
3. Activer Vercel Analytics
4. Option : Proxy Cloudflare

---

## 📅 Planning
| Jour | Tâches                                |
|------|---------------------------------------|
| 1    | Setup Next.js + Tailwind              |
| 2    | Composants de base (Header/Footer)    |
| 3    | Pages d'archive et article            |
| 4    | Intégration MDX                       |
| 5    | SEO et animations                     |
| 6    | Tests et déploiement                  |

---

## 📎 Ressources
- [Documentation MDX](https://mdxjs.com/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Framer Motion](https://www.framer.com/motion/)
- [Blog Vercel (inspiration)](https://vercel.com/blog)

---

## 🧠 Notes complémentaires
Ce blog pourra être interconnecté avec :
- `learn.eurinhash.com` (plateforme e-learning)
- `academy.eurinhash.com` (formations premium)
- Système CMS interne (`hashpress-core`)

---

## ✅ Checklist développement
- [ ] Initialisation projet
- [ ] Intégration MDX
- [ ] Thème sombre/clair
- [ ] Configuration sécurité
- [ ] Mise en place du cache
- [ ] Système de monitoring
- [ ] Déploiement Vercel
- [ ] Configuration domaine
- [ ] Tests de performance
- [ ] Documentation technique

Options supplémentaires :
1. 🚀 [Dépôt GitHub starter prêt-à-cloner]  
2. 📦 [Fichier .zip pour Cursor AI]  
3. 👨‍💻 [Pair-programming guidé]  

Dis-moi comment tu veux procéder !