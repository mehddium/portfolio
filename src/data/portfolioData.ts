export interface Project {
  id: string;
  title: string;
  category: "all" | "web" | "systems" | "network";
  year: string;
  featured: boolean;
  translations: {
    en: {
      tagline: string;
      description: string;
      highlights: string[];
    };
    fr: {
      tagline: string;
      description: string;
      highlights: string[];
    };
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  type: "education" | "experience" | "project";
  translations: {
    en: {
      title: string;
      institution: string;
      description: string;
      skills: string[];
    };
    fr: {
      title: string;
      institution: string;
      description: string;
      skills: string[];
    };
  };
}

export interface SkillGroup {
  nameKey: "languages" | "web" | "systems" | "tools";
  translations: {
    en: string;
    fr: string;
  };
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    descriptionKey?: {
      en: string;
      fr: string;
    };
  }[];
}

export const portfolioData = {
  profile: {
    name: "Mehdi",
    githubUsername: "mehddium",
    githubUrl: "https://github.com/mehddium",
    email: "mehddium@users.noreply.github.com",
    role: {
      en: "Software & Systems Engineer",
      fr: "Ingénieur Logiciel & Systèmes",
    },
    status: {
      en: "Available for internships & collaborations",
      fr: "Disponible pour stages & collaborations",
    },
    location: "France",
    bio: {
      en: {
        headline: "Bridging the gap between low-level systems and modern web architecture.",
        description:
          "Computer Science student with strong foundations in low-level C programming, Unix environments, and network protocols, combined with hands-on experience building reactive fullstack applications in Next.js and TypeScript. Passionate about clean code, performance profiling, and Swiss-inspired minimalist design.",
        aboutExtended:
          "Currently tackling academic engineering projects ranging from multi-threaded network servers in C to complete fullstack web platforms. Highly interested in systems programming, distributed tools, and building intuitive interfaces that don't rely on bloated templates.",
      },
      fr: {
        headline: "Faire le pont entre la programmation système bas niveau et l'architecture web moderne.",
        description:
          "Étudiant en informatique passionné par le développement bas niveau en C, les environnements Unix et les protocoles réseau, allié à une solide pratique du développement fullstack en Next.js et TypeScript. Rigoureux sur la performance, l'optimisation et le design minimaliste suisse.",
        aboutExtended:
          "Actuellement investi dans des projets académiques et personnels d'envergure : serveurs réseau multi-threads en C, outils Unix et applications web complètes. Animé par l'architecture système propre, la gestion mémoire rigoureuse et des interfaces utilisateur nettes sans surcharge.",
      },
    },
  },

  projects: [
    {
      id: "tcp-ftp-server",
      title: "Concurrent TCP Network Server & Client",
      category: "network",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "High-performance multi-threaded POSIX network server in C",
          description:
            "Implemented a robust TCP/IP file transfer server and interactive client following RFC specifications. Handled concurrency with POSIX threads, socket multiplexing (select/poll), and custom binary packet framing.",
          highlights: [
            "Low-level socket programming with POSIX API (AF_INET, SOCK_STREAM)",
            "Multi-client concurrency model with thread pooling and mutex synchronization",
            "Zero-copy file streaming and error-resilient packet parsing",
          ],
        },
        fr: {
          tagline: "Serveur réseau TCP POSIX haute performance et multi-thread en C",
          description:
            "Conception et implémentation d'un serveur et client TCP/IP pour le transfert de données conforme aux spécifications RFC. Gestion de la concurrence via threads POSIX, multiplexage d'E/S (select/poll) et protocole binaire personnalisé.",
          highlights: [
            "Programmation réseau bas niveau avec l'API POSIX (AF_INET, SOCK_STREAM)",
            "Gestion multi-clients concurrente avec pool de threads et verrous mutex",
            "Streaming de fichiers et tolérance aux erreurs de transmission",
          ],
        },
      },
      technologies: ["C", "POSIX Sockets", "pthreads", "TCP/IP", "Makefile", "GDB"],
      githubUrl: "https://github.com/mehddium",
    },
    {
      id: "unix-shell-allocator",
      title: "Custom Unix Shell & Dynamic Memory Allocator",
      category: "systems",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "Unix process orchestration engine and custom malloc/free implementation",
          description:
            "Engineered a POSIX-compliant minimalist shell capable of job control, pipeline chaining, and file descriptor redirection. Coupled with a custom memory allocator implementing free-list management and coalescing algorithms.",
          highlights: [
            "Process lifecycle management (fork, execvp, waitpid, signal handling)",
            "Piping (|), input/output redirections (<, >, >>) and background job execution",
            "Custom heap allocator with buddy allocation and first-fit free lists (sbrk/mmap)",
          ],
        },
        fr: {
          tagline: "Moteur d'exécution Unix et allocateur dynamique de mémoire personnalisé",
          description:
            "Développement d'un shell Unix minimaliste supportant la gestion des processus, le chaînage par tubes (pipes) et les redirections d'entrées/sorties. Couplé à un allocateur mémoire (malloc/free) gérant les blocs libres et la fragmentation.",
          highlights: [
            "Gestion du cycle de vie des processus (fork, execvp, waitpid, signaux)",
            "Support des pipelines (|), redirections (<, >, >>) et exécution en arrière-plan",
            "Allocateur de mémoire heap avec liste chaînée de blocs libres et fusion de mémoire",
          ],
        },
      },
      technologies: ["C", "Linux Kernel API", "Valgrind", "GDB", "Memory Management"],
      githubUrl: "https://github.com/mehddium",
    },
    {
      id: "fullstack-platform",
      title: "Modular Fullstack Web Platform",
      category: "web",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "End-to-end fullstack platform built with Next.js, TypeScript & PostgreSQL",
          description:
            "A modern, responsive fullstack web application focusing on high-load responsiveness, server-side data fetching, structured database schema, and strict type safety.",
          highlights: [
            "Next.js App Router with Server Actions and Optimistic UI updates",
            "Relational database modeling with PostgreSQL and automated migrations",
            "Secure session management, role-based access control (RBAC), and RESTful endpoints",
          ],
        },
        fr: {
          tagline: "Plateforme web fullstack modulaire en Next.js, TypeScript & PostgreSQL",
          description:
            "Application web fullstack moderne axée sur la réactivité, le rendu côté serveur optimisé, la modélisation de base de données relationnelle et la sécurité des données.",
          highlights: [
            "Architecture Next.js App Router avec Server Actions et mise à jour d'interface réactive",
            "Modélisation de base de données relationnelle PostgreSQL et migrations automatisées",
            "Authentification sécurisée, contrôle d'accès par rôles (RBAC) et API typées de bout en bout",
          ],
        },
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Bun"],
      githubUrl: "https://github.com/mehddium",
    },
    {
      id: "packet-sniffer-inspector",
      title: "Raw Network Packet Sniffer & Inspector",
      category: "network",
      year: "2024",
      featured: false,
      translations: {
        en: {
          tagline: "Low-level network packet capture and protocol dissection utility",
          description:
            "Command-line tool utilizing raw sockets to capture, decode, and visualize Ethernet, IP, TCP, UDP, and ICMP headers in real-time.",
          highlights: [
            "Raw socket capture on Linux (AF_PACKET / SOCK_RAW)",
            "Binary decoding of layer 2, 3, and 4 protocol headers",
            "Hexdump viewer and traffic filtering by IP/port",
          ],
        },
        fr: {
          tagline: "Outil d'inspection et de capture de paquets réseau bruts",
          description:
            "Utilitaire en ligne de commande exploitant les sockets brutes pour capturer, décoder et analyser les en-têtes Ethernet, IP, TCP, UDP et ICMP en temps réel.",
          highlights: [
            "Capture réseau via sockets brutes sous Linux (AF_PACKET / SOCK_RAW)",
            "Décodage binaire précis des couches 2, 3 et 4 du modèle OSI",
            "Affichage hexdump formaté et filtrage du trafic par IP et port",
          ],
        },
      },
      technologies: ["C", "Raw Sockets", "Network Protocols", "Wireshark", "Linux"],
      githubUrl: "https://github.com/mehddium",
    },
    {
      id: "swiss-design-system",
      title: "Swiss Typography Design System",
      category: "web",
      year: "2024",
      featured: false,
      translations: {
        en: {
          tagline: "Minimalist component system emphasizing typographical grid rhythm",
          description:
            "A crafted UI library inspired by the Swiss International Typographic Style. Features high-contrast dark palette, deliberate white space, and zero unnecessary visual clutter.",
          highlights: [
            "Design tokens based on mathematical grid scaling",
            "Accessible keyboard navigation and focus management",
            "Micro-animations built with hardware-accelerated transforms",
          ],
        },
        fr: {
          tagline: "Système de composants basé sur la typographie suisse et la grille modulaire",
          description:
            "Bibliothèque de composants UI inspirée du style typographique international suisse. Palette sombre à fort contraste, gestion soignée de l'espace blanc et élimination du superflu.",
          highlights: [
            "Tokens de design basés sur une échelle modulaire rigoureuse",
            "Accessibilité native, navigation au clavier et gestion du focus",
            "Micro-interactions fluides accélérées matériellement",
          ],
        },
      },
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
      githubUrl: "https://github.com/mehddium",
    },
  ] as Project[],

  timeline: [
    {
      id: "cs-studies",
      period: "2023 — Present",
      type: "education",
      translations: {
        en: {
          title: "Computer Science & Engineering Studies",
          institution: "University / Engineering School",
          description:
            "Intensive curriculum covering computer architecture, operating systems internals, low-level C programming, algorithm design, data structures, network protocols, and fullstack software development.",
          skills: ["C Programming", "Unix/Linux Internals", "Networking (TCP/IP)", "Fullstack Web", "Databases"],
        },
        fr: {
          title: "Études en Informatique & Ingénierie Logicielle",
          institution: "Cursus Universitaire / École d'Ingénieur",
          description:
            "Formation rigoureuse couvrant l'architecture des ordinateurs, les systèmes d'exploitation, le développement système en C, l'algorithmique avancée, les protocoles réseau et le développement web fullstack moderne.",
          skills: ["Programmation C", "Systèmes Unix/Linux", "Réseaux (TCP/IP)", "Web Fullstack", "Bases de données"],
        },
      },
    },
    {
      id: "academic-projects",
      period: "2024 — 2025",
      type: "project",
      translations: {
        en: {
          title: "Major Systems & Web Engineering Projects",
          institution: "Academic & Personal Lab",
          description:
            "Led and built multiple end-to-end technical deliverables: POSIX network servers, custom shell interpreters, memory management tools, and collaborative web platforms with Git/CI-CD workflows.",
          skills: ["Multi-threading", "POSIX APIs", "Git Flow & CI/CD", "Next.js", "System Architecture"],
        },
        fr: {
          title: "Projets Majeurs Systèmes, Réseaux & Web",
          institution: "Laboratoire Académique & Projets Personnels",
          description:
            "Réalisation de projets d'envergure : serveurs réseau POSIX, interpréteur de commandes Unix, outils de gestion mémoire et plateformes web collaboratives avec intégration continue.",
          skills: ["Multi-threading", "APIs POSIX", "Git Flow & CI/CD", "Next.js", "Architecture Système"],
        },
      },
    },
    {
      id: "freelance-design",
      period: "2023 — 2024",
      type: "experience",
      translations: {
        en: {
          title: "UI/UX & Web Development Practice",
          institution: "Independent",
          description:
            "Designed and implemented clean digital interfaces in Figma and React/Next.js, focusing on information architecture, typography hierarchy, and accessibility standards.",
          skills: ["Figma", "UI/UX Architecture", "Tailwind CSS", "Design Systems"],
        },
        fr: {
          title: "Pratique UI/UX & Développement Web",
          institution: "Projets Indépendants",
          description:
            "Conception et intégration d'interfaces soignées sous Figma et React/Next.js, avec une attention particulière portée à la hiérarchie typographique, la clarté de l'information et l'accessibilité.",
          skills: ["Figma", "Architecture UI/UX", "Tailwind CSS", "Design Systems"],
        },
      },
    },
  ] as TimelineItem[],

  skillGroups: [
    {
      nameKey: "languages",
      translations: { en: "Programming Languages", fr: "Langages de Programmation" },
      skills: [
        { name: "C (C99 / C11)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ESNext)", level: "Advanced" },
        { name: "Python", level: "Proficient" },
        { name: "SQL (PostgreSQL)", level: "Proficient" },
        { name: "Bash / Shell", level: "Proficient" },
      ],
    },
    {
      nameKey: "web",
      translations: { en: "Web & Fullstack Architecture", fr: "Web & Architecture Fullstack" },
      skills: [
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "React 19", level: "Advanced" },
        { name: "Node.js / Bun", level: "Advanced" },
        { name: "Tailwind CSS v4", level: "Advanced" },
        { name: "Framer Motion", level: "Proficient" },
        { name: "REST APIs & WebSockets", level: "Advanced" },
      ],
    },
    {
      nameKey: "systems",
      translations: { en: "Systems, Networking & DevOps", fr: "Systèmes, Réseau & DevOps" },
      skills: [
        { name: "Linux / Unix Internals", level: "Advanced" },
        { name: "POSIX Sockets & TCP/IP", level: "Advanced" },
        { name: "pthreads & Concurrency", level: "Proficient" },
        { name: "Git & GitHub Actions CI/CD", level: "Advanced" },
        { name: "GDB & Valgrind (Profiling)", level: "Proficient" },
        { name: "Docker", level: "Proficient" },
      ],
    },
    {
      nameKey: "tools",
      translations: { en: "Tools & Interface Design", fr: "Outils & Conception UI/UX" },
      skills: [
        { name: "Figma (UI/UX Prototyping)", level: "Proficient" },
        { name: "VS Code & Neovim", level: "Advanced" },
        { name: "Make / Build Systems", level: "Advanced" },
        { name: "Postman / Bruno", level: "Proficient" },
        { name: "Wireshark", level: "Proficient" },
      ],
    },
  ] as SkillGroup[],
};
