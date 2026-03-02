# MJ Barber - Chez Junior

Bienvenue sur le dépôt du site web de **MJ Barber - Chez Junior**, un salon de coiffure afro spécialisé situé à Marseille. Ce projet est une Single Page Application (SPA) moderne conçue pour présenter les services, le portfolio et les avis clients du salon.

![Aperçu](public/favicon.svg)

## 🌟 Fonctionnalités

- **Design Premium & Moderne** : Interface utilisateur élégante avec des animations fluides (Framer Motion).
- **Navigation Intuitive** : Menu de navigation responsive avec "Scroll Spy" (mise en surbrillance de la section active).
- **Preloader Personnalisé** : Écran de chargement animé avec logo et effets visuels.
- **Section Hero Immersive** : Présentation percutante avec avatar animé et appel à l'action.
- **Catalogue de Services** : Affichage clair des prestations (Coupes, Barbe, Tresses, Coloration, etc.).
- **Témoignages Clients** : Intégration des avis Google réels pour renforcer la confiance.
- **Galerie Photos** : Mise en valeur du savoir-faire à travers des visuels de haute qualité.
- **Localisation & Contact** : Informations pratiques et carte interactive.
- **Mode Sombre/Clair** : Adaptation du design (actuellement optimisé pour un thème sombre élégant avec accents dorés).

## 🛠️ Stack Technique

Ce projet utilise les technologies les plus récentes pour garantir performance et maintenabilité :

- **Framework** : [React](https://react.dev/) (v18)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Composants UI** : [Shadcn/ui](https://ui.shadcn.com/) (basé sur Radix UI)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Package Manager** : [pnpm](https://pnpm.io/)

## 🚀 Installation et Lancement

Pour lancer le projet localement sur votre machine :

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/votre-username/mj-barber.git
    cd mj-barber
    ```

2.  **Installer les dépendances** :
    ```bash
    pnpm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    pnpm dev
    ```
    Le site sera accessible à l'adresse `http://localhost:8080` (ou un autre port indiqué dans le terminal).

4.  **Construire pour la production** :
    ```bash
    pnpm build
    ```

## 📂 Structure du Projet

```
src/
├── assets/          # Images et ressources statiques
├── components/      # Composants React réutilisables
│   ├── sections/    # Sections principales de la page (Hero, Services, etc.)
│   ├── ui/          # Composants de base Shadcn (Button, Card, etc.)
│   └── ...
├── hooks/           # Hooks personnalisés
├── lib/             # Utilitaires (cn, etc.)
├── pages/           # Pages de l'application (Index, NotFound)
├── App.tsx          # Composant racine
└── main.tsx         # Point d'entrée
```

## 🎨 Personnalisation

Le thème est configuré dans `tailwind.config.ts`. Les couleurs principales (Primary, Secondary, Accent) peuvent être ajustées via les variables CSS dans `src/index.css`.

## 👤 Auteur

Projet développé pour **MJ Barber - Chez Junior**.

---
*Fait avec ❤️ à Marseille.*
