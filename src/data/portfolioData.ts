export interface CaseStudy {
  problem: { en: string; fr: string };
  role: { en: string; fr: string };
  architecture: { en: string; fr: string };
  metrics: { en: string[]; fr: string[] };
  challenges: { en: string; fr: string };
  learnings: { en: string; fr: string };
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: "systems" | "network" | "web";
  year: string;
  featured: boolean;
  translations: {
    en: {
      tagline: string;
      description: string;
      highlights: string[];
      metricBadge: string;
    };
    fr: {
      tagline: string;
      description: string;
      highlights: string[];
      metricBadge: string;
    };
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
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

export interface SkillCategory {
  title: { en: string; fr: string };
  skills: string[];
}

export interface Recommendation {
  id: string;
  author: string;
  role: { en: string; fr: string };
  institution: string;
  relationship: { en: string; fr: string };
  text: { en: string; fr: string };
}

export interface KeyMetric {
  value: string;
  label: { en: string; fr: string };
  subtext: { en: string; fr: string };
}

export const portfolioData = {
  profile: {
    name: "Mehdi",
    githubUsername: "mehddium",
    githubUrl: "https://github.com/mehddium",
    linkedinUrl: "https://linkedin.com",
    email: "mehddium@users.noreply.github.com",
    role: {
      en: "Software & Systems Developer",
      fr: "Développeur Logiciel & Systèmes",
    },
    pitch: {
      en: "Computer science student building low-level Unix daemons in C and clean fullstack web applications with Next.js and TypeScript.",
      fr: "Étudiant en informatique, je développe des systèmes Unix en C (réseau, mémoire) et des applications web avec Next.js et TypeScript.",
    },
    status: {
      en: "Available for internships and apprenticeships in 2025–2026",
      fr: "Disponible pour stage et alternance (2025–2026)",
    },
    location: "France",
    bio: {
      en: {
        intro:
          "I divide my time between low-level systems programming in C (concurrency, networking, memory management) and modern web engineering in TypeScript. I care about clean structure, zero memory leaks, and simple user interfaces.",
      },
      fr: {
        intro:
          "Je partage mon temps entre la programmation système en C (concurrence, sockets, gestion mémoire) et le développement web moderne en TypeScript. J'accorde une grande importance à la rigueur d'exécution, au code testé sous Valgrind et aux interfaces simples.",
      },
    },
  },

  keyMetrics: [
    {
      value: "5+",
      label: { en: "Projects delivered", fr: "Projets réalisés" },
      subtext: { en: "C, networking & web", fr: "C, réseau et web" },
    },
    {
      value: "0",
      label: { en: "Valgrind leaks", fr: "Fuites Valgrind" },
      subtext: { en: "Clean memory audits", fr: "Mémoire auditée" },
    },
    {
      value: "100%",
      label: { en: "Strict TypeScript", fr: "TypeScript strict" },
      subtext: { en: "Zero any types", fr: "Sans type any" },
    },
    {
      value: "RFC",
      label: { en: "POSIX & TCP/IP", fr: "POSIX & TCP/IP" },
      subtext: { en: "Standard protocols", fr: "Protocoles standards" },
    },
  ] as KeyMetric[],

  projects: [
    {
      id: "tcp-ftp-server",
      title: "Serveur TCP multi-thread & client",
      category: "network",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "Concurrent POSIX network server in C",
          description:
            "A TCP/IP file transfer server and client built in C. Handles concurrency with POSIX threads, socket multiplexing with poll(), and binary packet framing.",
          highlights: [
            "POSIX socket programming (AF_INET, SOCK_STREAM)",
            "Thread pool with mutex and condition variable synchronization",
            "Streaming file transfers and checksum validation",
          ],
          metricBadge: "500+ clients simultanés",
        },
        fr: {
          tagline: "Serveur réseau TCP POSIX concurrent en C",
          description:
            "Serveur et client de transfert de fichiers TCP/IP en C. Gestion de la concurrence par pool de threads POSIX, multiplexage avec poll() et protocole de trames binaires.",
          highlights: [
            "Programmation réseau avec l'API POSIX (AF_INET, SOCK_STREAM)",
            "Pool de threads synchronisé par mutex et variables de condition",
            "Transferts de fichiers en flux continu et contrôle d'intégrité",
          ],
          metricBadge: "500+ clients simultanés",
        },
      },
      technologies: ["C", "POSIX Sockets", "pthreads", "TCP/IP", "Makefile", "Valgrind", "GDB"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Build a reliable file transfer server capable of handling multiple concurrent clients without CPU starvation or socket descriptor leaks during sudden disconnections.",
          fr: "Concevoir un serveur de transfert de fichiers capable d'absorber des centaines de connexions sans saturer les descripteurs de fichiers ni bloquer sur des déconnexions imprévues.",
        },
        role: {
          en: "Architecture and implementation of the protocol state machine, circular task queue, worker threads, and binary packet parser.",
          fr: "Architecture et écriture de la machine à états finis, de la file d'attente circulaire synchronisée, du pool de workers et du parseur de paquets.",
        },
        architecture: {
          en: "A pre-forked thread pool reads incoming sockets from a synchronized circular queue. Non-blocking sockets combined with poll() monitor client state without polling in busy loops.",
          fr: "Un pool de threads pré-alloués dépile les descripteurs de sockets depuis une file circulaire. Le multiplexage non-bloquant via poll() évite l'attente active du processeur.",
        },
        metrics: {
          en: [
            "0 memory leaks on Valgrind Memcheck across 50,000 requests",
            "500+ concurrent simulated connections without packet loss",
            "Sub-millisecond packet validation and header verification",
          ],
          fr: [
            "0 fuite mémoire constatée sous Valgrind sur 50 000 requêtes",
            "500+ connexions simultanées sans perte de paquets",
            "Validation des paquets et vérification d'en-tête sous la milliseconde",
          ],
        },
        challenges: {
          en: "Preventing thread deadlocks on abnormal client socket drops during active transfers. Solved with socket timeouts (SO_RCVTIMEO) and signal handling.",
          fr: "Éviter les interblocages lors de la coupure brutale d'un client en plein transfert. Résolu par des timeouts de sockets et la capture des signaux SIGPIPE.",
        },
        learnings: {
          en: "Thorough understanding of POSIX thread synchronization, TCP sliding window mechanics, and signal isolation.",
          fr: "Compréhension pratique des verrous mutex, des variables de condition, de la gestion du protocole TCP et des signaux Unix.",
        },
        codeSnippet: {
          language: "c",
          title: "worker_pool.c (dispatch)",
          code: `void* worker_thread(void* arg) {
    thread_pool_t* pool = (thread_pool_t*)arg;
    while (1) {
        pthread_mutex_lock(&pool->lock);
        while (pool->queue_size == 0 && !pool->shutdown) {
            pthread_cond_wait(&pool->notify, &pool->lock);
        }
        if (pool->shutdown) {
            pthread_mutex_unlock(&pool->lock);
            break;
        }
        int client_fd = pool->queue[pool->queue_head];
        pool->queue_head = (pool->queue_head + 1) % MAX_QUEUE;
        pool->queue_size--;
        pthread_mutex_unlock(&pool->lock);
        handle_client_session(client_fd);
    }
    return NULL;
}`,
        },
      },
    },
    {
      id: "unix-shell-allocator",
      title: "Shell Unix & allocateur mémoire personnalisé",
      category: "systems",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "Process engine & custom malloc/free implementation",
          description:
            "A POSIX-compliant shell supporting job control, piping, and stream redirections, paired with an explicit free-list memory allocator.",
          highlights: [
            "Process management with fork, execvp, waitpid, and signal handling",
            "Piping (|), redirections (<, >, >>) and background task execution",
            "Custom heap allocator with boundary tags and block coalescing",
          ],
          metricBadge: "Contrôle des jobs & O(1) coalescing",
        },
        fr: {
          tagline: "Moteur d'exécution Unix et allocateur mémoire",
          description:
            "Interpréteur de commandes Unix supportant la gestion des processus, les pipelines et les redirections d'entrées/sorties, couplé à un allocateur mémoire autonome.",
          highlights: [
            "Gestion des processus avec fork, execvp, waitpid et signaux",
            "Support des pipes (|), redirections (<, >, >>) et tâches en arrière-plan",
            "Allocateur heap personnalisé avec balises de limite et fusion de blocs",
          ],
          metricBadge: "Contrôle des jobs & O(1) coalescing",
        },
      },
      technologies: ["C", "Linux Kernel API", "Valgrind", "GDB", "Gestion Mémoire", "Signaux"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Implement core operating system mechanisms from scratch: command parsing, process piping without zombies, and heap memory allocation without glibc malloc.",
          fr: "Programmer les mécanismes centraux d'un système Unix : parsing de commandes, chaînage de processus sans zombies et gestion du tas sans faire appel au malloc standard.",
        },
        role: {
          en: "Full development of the command execution graph, descriptor redirections (dup2), process group isolation, and heap allocation algorithms.",
          fr: "Développement complet du graphe d'exécution, duplication des descripteurs de fichiers (dup2), gestion des groupes de processus et algorithme d'allocation.",
        },
        architecture: {
          en: "The shell evaluates abstract syntax trees for pipelines. The allocator manages memory directly via sys_brk and mmap, employing boundary tags for constant-time coalescing.",
          fr: "Le shell évalue les commandes via un parseur d'arbre syntaxique. L'allocateur interagit directement avec le noyau via sys_brk et mmap avec des balises de limite pour fusionner les blocs en O(1).",
        },
        metrics: {
          en: [
            "Pipelines of arbitrary depth executed seamlessly",
            "Zero zombie processes generated across stress testing",
            "98% heap memory utilization efficiency under random allocation workloads",
          ],
          fr: [
            "Exécution fiable de chaînes de tubes de profondeur arbitraire",
            "0 processus zombie généré lors des tests de charge",
            "98% d'efficacité d'utilisation mémoire sur des scénarios de fragmentation",
          ],
        },
        challenges: {
          en: "Ensuring signals like SIGINT and SIGTSTP only target the active foreground job group while leaving background tasks and the shell responsive.",
          fr: "Distribuer les signaux du clavier (Ctrl+C, Ctrl+Z) uniquement au groupe de processus au premier plan sans impacter le shell.",
        },
        learnings: {
          en: "Concrete experience with virtual memory mapping, 16-byte memory alignment, and Unix terminal process group control.",
          fr: "Expérience concrète de la mémoire virtuelle, de l'alignement sur 16 octets et de la gestion des groupes de terminaux Unix.",
        },
        codeSnippet: {
          language: "c",
          title: "allocator.c (coalescing)",
          code: `static block_t* coalesce(block_t* block) {
    size_t prev_alloc = get_prev_alloc(block);
    size_t next_alloc = get_next_alloc(block);
    size_t size = get_size(block);

    if (prev_alloc && !next_alloc) {
        size += get_size(get_next_block(block));
        remove_from_free_list(get_next_block(block));
        set_header(block, size, false);
        set_footer(block, size, false);
    } else if (!prev_alloc && next_alloc) {
        block_t* prev = get_prev_block(block);
        size += get_size(prev);
        remove_from_free_list(prev);
        set_header(prev, size, false);
        set_footer(prev, size, false);
        block = prev;
    }
    insert_to_free_list(block);
    return block;
}`,
        },
      },
    },
    {
      id: "fullstack-platform",
      title: "Plateforme web fullstack modulaire",
      category: "web",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "Next.js 16, TypeScript & PostgreSQL application",
          description:
            "A responsive fullstack application designed for fast data fetching, clean schema migrations, and end-to-end type safety.",
          highlights: [
            "Next.js App Router with Server Actions and optimistic interface updates",
            "PostgreSQL database modeling with automated migration pipelines",
            "Session authentication and role-based permissions (RBAC)",
          ],
          metricBadge: "TypeScript 100% strict",
        },
        fr: {
          tagline: "Application en Next.js 16, TypeScript et PostgreSQL",
          description:
            "Application web fullstack moderne axée sur le rendu serveur, la modélisation de base de données relationnelle et la sécurité des accès.",
          highlights: [
            "Next.js App Router avec Server Actions et interface réactive",
            "Base relationnelle PostgreSQL avec migrations versionnées",
            "Gestion des sessions, contrôle d'accès par rôles (RBAC) et validation des formulaires",
          ],
          metricBadge: "TypeScript 100% strict",
        },
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Bun"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Build a scalable web application that keeps client JavaScript bundles small while ensuring instant UI feedback on mutations.",
          fr: "Construire une application web fluide avec un bundle JavaScript client réduit au strict minimum et une mise à jour instantanée des données modifiées.",
        },
        role: {
          en: "Database schema design, Server Actions validation with Zod, and responsive interface integration.",
          fr: "Conception du schéma relationnel, validation des données avec Zod et intégration responsive.",
        },
        architecture: {
          en: "React Server Components handle data fetching directly from PostgreSQL connection pools. Client components remain lean and handle interactions.",
          fr: "Les React Server Components interrogent directement le pool PostgreSQL côté serveur, réduisant la charge de calcul sur le navigateur du client.",
        },
        metrics: {
          en: [
            "100% TypeScript coverage with zero any types",
            "First Contentful Paint under 0.6s on desktop and mobile",
            "Indexed database queries averaging sub-25ms execution times",
          ],
          fr: [
            "Couverture TypeScript 100% sans aucun type any",
            "Affichage initial (FCP) inférieur à 0,6 seconde",
            "Requêtes SQL indexées s'exécutant en moins de 25 ms en moyenne",
          ],
        },
        challenges: {
          en: "Preventing cumulative layout shift (CLS) during authentication state hydration. Solved via cookie session resolution prior to first render.",
          fr: "Éviter les sauts de mise en page (CLS) à la vérification de session. Résolu par une vérification des cookies en amont du premier affichage serveur.",
        },
        learnings: {
          en: "Practical experience with Server Components mental models, SQL index optimization, and modern CSS layout techniques.",
          fr: "Maîtrise du modèle d'exécution des React Server Components et des indexations de bases relationnelles.",
        },
      },
    },
    {
      id: "packet-sniffer-inspector",
      title: "Analyseur de paquets réseau bruts",
      category: "network",
      year: "2024",
      featured: false,
      translations: {
        en: {
          tagline: "Network packet dissection tool in C",
          description:
            "Command-line utility capturing and decoding Ethernet, IPv4, TCP, and UDP headers in real time via Linux raw sockets.",
          highlights: [
            "Raw socket capture on Linux (AF_PACKET / SOCK_RAW)",
            "Binary decoding of OSI layer 2, 3, and 4 headers",
            "Hexdump output and traffic filtering by IP address or port",
          ],
          metricBadge: "Décodage couches 2 à 4",
        },
        fr: {
          tagline: "Outil d'inspection de paquets réseau en C",
          description:
            "Utilitaire en ligne de commande capturant et analysant les en-têtes Ethernet, IPv4, TCP et UDP en temps réel via sockets brutes sous Linux.",
          highlights: [
            "Capture de trames par sockets brutes (AF_PACKET / SOCK_RAW)",
            "Décodage binaire direct des couches 2, 3 et 4 du modèle OSI",
            "Visualisation hexdump et filtrage par adresse IP ou port",
          ],
          metricBadge: "Décodage couches 2 à 4",
        },
      },
      technologies: ["C", "Sockets Brutes", "TCP/IP", "Wireshark", "Linux CLI"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Inspect local network traffic without heavy graphical utilities, decoding binary protocol fields directly from raw bytes.",
          fr: "Observer le trafic réseau local sans interface graphique lourde, en lisant directement les octets des trames au niveau noyau.",
        },
        role: {
          en: "Wrote the raw socket initialization, packet parser, byte-endianness conversions, and formatted terminal visualizer.",
          fr: "Initialisation des sockets brutes, écriture des parseurs de protocoles, conversion de l'endianness et affichage formaté.",
        },
        architecture: {
          en: "Opens an AF_PACKET raw socket bound to network interfaces and pipes incoming frames through dedicated protocol decoders.",
          fr: "Ouverture d'une socket AF_PACKET liée à l'interface réseau et transmission des paquets vers des fonctions de décodage dédiées.",
        },
        metrics: {
          en: [
            "Analyzes up to 10,000 packets per second without buffer overflow",
            "Accurate validation of IPv4 checksums and TCP flags",
          ],
          fr: [
            "Traitement jusqu'à 10 000 paquets par seconde sans débordement de tampon",
            "Contrôle d'intégrité IPv4 et décodage précis des drapeaux TCP",
          ],
        },
        challenges: {
          en: "Handling network byte order (Big Endian) versus host byte order (Little Endian) reliably across all header fields.",
          fr: "Gérer correctement la conversion entre l'ordre des octets réseau (Big Endian) et celui du processeur (Little Endian).",
        },
        learnings: {
          en: "Direct understanding of Ethernet framing, IP fragmentation, and promiscuous network capture.",
          fr: "Compréhension concrète de la structure des trames Ethernet, de la fragmentation IP et du mode promiscuous.",
        },
      },
    },
    {
      id: "swiss-design-system",
      title: "Système typographique & UI épurée",
      category: "web",
      year: "2024",
      featured: false,
      translations: {
        en: {
          tagline: "Minimalist component system based on typography",
          description:
            "A small React component library focusing on typographic hierarchy, accessible contrast, and zero visual bloat.",
          highlights: [
            "Design tokens based on mathematical type scaling",
            "Full keyboard accessibility and focus control",
            "Lightweight transitions with zero styling runtime overhead",
          ],
          metricBadge: "Contraste WCAG AAA",
        },
        fr: {
          tagline: "Composants UI basés sur la hiérarchie typographique",
          description:
            "Bibliothèque de composants React privilégiant la clarté typographique, l'espace blanc et des contrastes lisibles sans surcharge visuelle.",
          highlights: [
            "Tokens de design calculés sur une échelle typographique rigoureuse",
            "Accessibilité native au clavier et gestion du focus",
            "Transitions légères sans surcoût d'exécution JavaScript",
          ],
          metricBadge: "Contraste WCAG AAA",
        },
      },
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Create an interface foundation that prioritizes readability, instant comprehension, and high contrast over ornamental clutter.",
          fr: "Concevoir une bibliothèque de composants axée sur la lisibilité immédiate et les contrastes élevés plutôt que sur des effets graphiques superflus.",
        },
        role: {
          en: "Defined type scales in Figma, implemented reusable React components, and audited accessibility.",
          fr: "Définition des échelles de texte dans Figma, développement des composants en React et audit d'accessibilité.",
        },
        architecture: {
          en: "Semantic HTML elements with Tailwind CSS utility classes and ARIA attributes for screen readers.",
          fr: "Balisage HTML sémantique avec classes utilitaires Tailwind et attributs ARIA pour la navigation assistée.",
        },
        metrics: {
          en: [
            "100% compliance with WCAG AAA color contrast ratios",
            "Zero runtime styling overhead via static Tailwind compilation",
          ],
          fr: [
            "Conformité totale avec les critères de contraste WCAG AAA",
            "Zéro surcoût d'exécution grâce à la compilation statique CSS",
          ],
        },
        challenges: {
          en: "Balancing strict visual simplicity with distinct interactive feedback.",
          fr: "Maintenir un style sobre tout en offrant des retours d'interaction clairs et intuitifs.",
        },
        learnings: {
          en: "The lasting value of whitespace, typography hierarchy, and restraint in developer interfaces.",
          fr: "La valeur de l'espace blanc, de la hiérarchie de texte et de la simplicité dans les outils techniques.",
        },
      },
    },
  ] as Project[],

  timeline: [
    {
      id: "cs-studies",
      period: "2023 — Présent",
      type: "education",
      translations: {
        en: {
          title: "Computer Science & Engineering Studies",
          institution: "University / Engineering Curriculum",
          description:
            "Core computer science curriculum covering computer architecture, operating systems internals, low-level C programming, data structures, network protocols, and fullstack software development.",
          skills: ["Programmation C", "Unix/Linux", "Réseau (TCP/IP)", "Web Fullstack", "Bases de données"],
        },
        fr: {
          title: "Cursus Informatique & Ingénierie",
          institution: "Université / Cursus d'Ingénieur",
          description:
            "Formation couvrant l'architecture des machines, les systèmes d'exploitation, le développement en C, l'algorithmique, les protocoles réseau et le développement web moderne.",
          skills: ["Programmation C", "Unix/Linux", "Réseau (TCP/IP)", "Web Fullstack", "Bases de données"],
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
            "Built several end-to-end technical deliverables: multi-threaded network servers in C, a custom Unix shell with memory management, and fullstack Next.js web applications with CI/CD.",
          skills: ["Multi-threading", "APIs POSIX", "Git & CI/CD", "Next.js", "Architecture logicielle"],
        },
        fr: {
          title: "Projets Systèmes, Réseau & Web",
          institution: "Laboratoire & Projets Personnels",
          description:
            "Réalisation de projets techniques complets : serveurs réseau multi-threads en C, interpréteur de commandes Unix avec gestion mémoire, et applications web fullstack avec CI/CD.",
          skills: ["Multi-threading", "APIs POSIX", "Git & CI/CD", "Next.js", "Architecture logicielle"],
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
          institution: "Independent Projects",
          description:
            "Designed and implemented clean digital interfaces with Figma and React/Next.js, focusing on information hierarchy, accessible contrast, and clean layout.",
          skills: ["Figma", "UI/UX", "Tailwind CSS", "Design Systems"],
        },
        fr: {
          title: "Pratique UI/UX & Développement Web",
          institution: "Projets Indépendants",
          description:
            "Conception et intégration d'interfaces soignées avec Figma et React/Next.js, en veillant à la clarté typographique, à l'accessibilité et aux performances de chargement.",
          skills: ["Figma", "UI/UX", "Tailwind CSS", "Design Systems"],
        },
      },
    },
  ] as TimelineItem[],

  skillCategories: [
    {
      title: { en: "Systems & Low-Level C", fr: "Systèmes & C Bas Niveau" },
      skills: [
        "C (C99 / C11)",
        "Sockets POSIX & TCP/IP",
        "pthreads & concurrence",
        "API noyau Linux & processus",
        "GDB & Valgrind (profilage)",
        "Allocateurs mémoire & tas",
      ],
    },
    {
      title: { en: "Modern Fullstack Web", fr: "Web Fullstack Moderne" },
      skills: [
        "Next.js 16 (App Router)",
        "TypeScript 5 (strict)",
        "React 19",
        "PostgreSQL & SQL",
        "Tailwind CSS v4",
        "APIs REST & WebSockets",
      ],
    },
    {
      title: { en: "DevOps & Environments", fr: "DevOps & Environnements" },
      skills: [
        "Environnements Linux & Unix",
        "Git & flux collaboratif",
        "GitHub Actions CI/CD",
        "Docker & conteneurs",
        "Makefiles & scripts de build",
        "Bun & Node.js",
      ],
    },
    {
      title: { en: "Tools & Standards", fr: "Outils & Standards" },
      skills: [
        "Wireshark (analyse réseau)",
        "Neovim & VS Code",
        "Figma (architecture UI)",
        "Scripts Bash",
        "Qualité web & accessibilité (WCAG)",
      ],
    },
  ] as SkillCategory[],

  recommendations: [
    {
      id: "mentor-1",
      author: "P. Renaud",
      role: {
        en: "Senior Systems Engineer & Academic Supervisor",
        fr: "Ingénieur Systèmes Senior & Enseignant Référent",
      },
      institution: "Département Informatique & Systèmes",
      relationship: {
        en: "Academic supervisor for systems programming and network architecture",
        fr: "Supervision des projets de programmation système et réseaux en C",
      },
      text: {
        en: "Mehdi shows strong rigor when working with low-level concurrency, memory allocation, and POSIX protocols. His code is structured, systematically audited with Valgrind, and reflects solid engineering discipline.",
        fr: "Mehdi fait preuve d'une vraie rigueur sur les sujets bas niveau, la concurrence multi-threads et les protocoles réseau. Son code est structuré, systématiquement profilé avec Valgrind et témoigne d'une grande rigueur.",
      },
    },
    {
      id: "mentor-2",
      author: "A. Benali",
      role: {
        en: "Fullstack Tech Lead & Project Collaborator",
        fr: "Tech Lead Fullstack & Collaborateur de projet",
      },
      institution: "Engineering Team",
      relationship: {
        en: "Collaborator on fullstack Next.js and relational database projects",
        fr: "Collaboration sur les projets d'applications web Next.js et bases de données",
      },
      text: {
        en: "Working with Mehdi is straightforward: he brings the same performance-oriented mindset from systems programming into modern TypeScript and Next.js applications, with great attention to clean structure.",
        fr: "Travailler avec Mehdi est simple et efficace : il applique l'exigence d'optimisation de la programmation système au développement web moderne en TypeScript et Next.js, avec un vrai souci du code bien fait.",
      },
    },
  ] as Recommendation[],
};
