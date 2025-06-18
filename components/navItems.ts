import { Home, Book, Layers, Cloud, Shield, Brain, Code2, Mail, Info, User } from "lucide-react";

export type NavItem = {
  label: string
  href?: string
  icon?: any
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Articles", href: "/blog", icon: Book },
  {
    label: "Sujets",
    icon: Layers,
    children: [
      { label: "Cloud & DevOps", href: "/sujets/cloud", icon: Cloud },
      { label: "Cybersécurité", href: "/sujets/securite", icon: Shield },
      { label: "IA & Data", href: "/sujets/ia", icon: Brain },
      { label: "Développement Web", href: "/sujets/web", icon: Code2 },
    ]
  },
  { label: "Guides & Tutos", href: "/guides", icon: Book },
  { label: "À propos", href: "/a-propos", icon: Info },
] 