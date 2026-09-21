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

export interface SkillGroup {
  nameKey: "systems" | "web" | "devops" | "tools";
  translations: {
    en: string;
    fr: string;
  };
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
  }[];
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
      en: "Software & Systems Engineer",
      fr: "Ingénieur Logiciel & Systèmes",
    },
    pitch: {
      en: "Software & Systems Engineer specialized in low-level POSIX C, Unix network daemons, and reactive Next.js fullstack platforms.",
      fr: "Ingénieur Logiciel & Systèmes spécialisé en C/Unix bas niveau, démons réseau POSIX et architectures web fullstack Next.js.",
    },
    status: {
      en: "Available for Internships & Apprenticeships (2025-2026)",
      fr: "Disponible pour Stage & Alternance (2025-2026)",
    },
    location: "France // Remote",
    bio: {
      en: {
        headline: "Bridging the gap between low-level systems and modern web architecture.",
        description:
          "Computer Science student with deep foundations in low-level C programming, Unix environments, and network protocols, coupled with rigorous hands-on experience building reactive fullstack applications in Next.js and TypeScript. Dedicated to clean architecture, memory safety profiling, and Swiss-inspired minimalist design.",
        aboutExtended:
          "Currently tackling academic and open-source engineering challenges ranging from multi-threaded network daemons in C to complete production-grade fullstack web platforms. Highly focused on systems programming, distributed tooling, memory optimization, and intuitive interfaces that eliminate bloat.",
      },
      fr: {
        headline: "Faire le pont entre la programmation système bas niveau et l'architecture web moderne.",
        description:
          "Étudiant en informatique combinant de solides bases en développement bas niveau en C, environnements Unix et protocoles réseau, avec une pratique rigoureuse du développement fullstack en Next.js et TypeScript. Rigoureux sur la performance, l'optimisation mémoire et le design épuré.",
        aboutExtended:
          "Actuellement investi dans des projets d'ingénierie d'envergure : serveurs réseau multi-threads en C, ordonnancement de processus Unix et applications web complètes. Animé par l'architecture logicielle propre, la gestion mémoire sans fuite et des interfaces nettes et accessibles.",
      },
    },
  },

  keyMetrics: [
    {
      value: "5+",
      label: { en: "Key Technical Projects", fr: "Projets d'Ingénierie" },
      subtext: { en: "C Systems, Networking & Fullstack", fr: "Systèmes C, Réseau & Fullstack" },
    },
    {
      value: "0",
      label: { en: "Valgrind Memory Leaks", fr: "Fuite mémoire Valgrind" },
      subtext: { en: "Strict memory auditing & cleanup", fr: "Audit mémoire & libération stricte" },
    },
    {
      value: "100%",
      label: { en: "Strict Type Safety", fr: "Typage Strict" },
      subtext: { en: "TypeScript 5 & ANSI C99/C11", fr: "TypeScript 5 & ANSI C99/C11" },
    },
    {
      value: "RFC",
      label: { en: "Protocol Compliant", fr: "Conformité Protocoles" },
      subtext: { en: "POSIX TCP/IP, HTTP & REST", fr: "POSIX TCP/IP, HTTP & REST" },
    },
  ] as KeyMetric[],

  projects: [
    {
      id: "tcp-ftp-server",
      title: "Concurrent TCP Network Daemon & Client",
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
          metricBadge: "500+ Concurrent Connections // 0 Memory Leaks",
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
          metricBadge: "500+ connexions simultanées // 0 fuite mémoire",
        },
      },
      technologies: ["C", "POSIX Sockets", "pthreads", "TCP/IP", "Makefile", "GDB", "Valgrind"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Building a reliable, high-throughput file transfer server capable of handling multiple concurrent clients without CPU starvation, socket leaks, or race conditions during rapid disconnects.",
          fr: "Concevoir un serveur de transfert de fichiers fiable et performant capable de gérer des centaines de clients simultanés sans famine CPU, fuite de descripteurs de sockets ou conditions de course.",
        },
        role: {
          en: "Lead systems architect & developer: implemented the protocol state machine, thread worker pool, circular job queue, and binary packet framing layer.",
          fr: "Architecte & développeur principal : implémentation de la machine à états finis, du pool de workers multi-threads, de la file circulaire et du protocole binaire de trames.",
        },
        architecture: {
          en: "Designed a pre-forked thread pool architecture with a synchronized ring buffer. Network I/O uses non-blocking sockets with poll() multiplexing to dispatch incoming connection descriptors to idle worker threads.",
          fr: "Architecture en pool de threads pré-alloués avec file d'attente circulaire synchronisée (mutex + variables de condition). Utilisation d'E/S non-bloquantes multiplexées via poll() pour distribuer les connexions.",
        },
        metrics: {
          en: [
            "Validated 0 memory leaks across 50,000 requests via Valgrind Memcheck",
            "Sustained 500+ simulated concurrent connections without dropped packets",
            "Sub-millisecond packet validation and header checksum verification",
          ],
          fr: [
            "0 fuite mémoire validée sous Valgrind Memcheck sur plus de 50 000 requêtes",
            "Tenue de charge à 500+ connexions simultanées sans perte de paquets",
            "Validation de paquets et calcul de somme de contrôle sous la milliseconde",
          ],
        },
        challenges: {
          en: "Preventing thread deadlocks on abnormal socket closures during large binary transfers. Solved using atomic cancellation checks and dedicated socket timeout options (SO_RCVTIMEO).",
          fr: "Éviter les interblocages (deadlocks) lors des fermetures intempestives de sockets pendant un transfert volumineux. Résolu via vérifications atomiques et timeouts de sockets (SO_RCVTIMEO).",
        },
        learnings: {
          en: "Gained deep practical mastery of POSIX synchronization primitives (pthread_mutex, pthread_cond_wait), TCP sliding windows, and robust signal handling (SIGINT/SIGPIPE).",
          fr: "Maîtrise approfondie des primitives de synchronisation POSIX (mutex, variables de condition), des fenêtres glissantes TCP et de la capture rigoureuse des signaux Unix (SIGINT, SIGPIPE).",
        },
        codeSnippet: {
          language: "c",
          title: "worker_pool.c // Safe Connection Dispatch",
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
          metricBadge: "Full POSIX Job Control // 98% Heap Utilization",
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
          metricBadge: "Gestion complète des jobs // 98% d'efficacité mémoire",
        },
      },
      technologies: ["C", "Linux Kernel API", "Valgrind", "GDB", "Memory Management", "Signals"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Understanding operating system primitives by creating a shell from scratch that avoids zombie processes, handles nested pipelines, and manages heap memory without standard glibc malloc.",
          fr: "Comprendre les entrailles d'un système d'exploitation en créant un shell sans dépendance à glibc pour la mémoire, capable de gérer des pipelines complexes sans processus zombies.",
        },
        role: {
          en: "Sole developer: tokenized user commands, managed file descriptor duplication (dup2), orchestrated process groups, and programmed an explicit free-list allocator with block splitting.",
          fr: "Développeur unique : analyse lexicale, duplication de descripteurs de fichiers (dup2), synchronisation des groupes de processus et programmation de l'allocateur avec fusion de blocs libres.",
        },
        architecture: {
          en: "Shell uses an AST parser for command execution with fork/execvp and pipe chains. The allocator requests memory via sys_brk/mmap and organizes headers with boundary tags for O(1) block coalescing.",
          fr: "Le shell s'appuie sur une structure d'arbre syntaxique pour exécuter les commandes en chaîne via fork/execvp et pipe. L'allocateur sollicite le kernel via sys_brk/mmap et utilise des balises de limite (boundary tags) pour fusionner les blocs en O(1).",
        },
        metrics: {
          en: [
            "Executed arbitrary pipeline depth: cat file | grep foo | sort | uniq -c",
            "Zero zombie processes generated (SIGCHLD handler with WNOHANG waitpid loop)",
            "Achieved 98% memory utilization efficiency under high-fragmentation stress tests",
          ],
          fr: [
            "Exécution de pipelines de profondeur arbitraire : cat file | grep foo | sort | uniq -c",
            "0 processus zombie généré (handler SIGCHLD avec boucle waitpid et flag WNOHANG)",
            "Taux d'utilisation de la mémoire vive de 98% sous benchmark d'allocations aléatoires",
          ],
        },
        challenges: {
          en: "Managing signal forwarding (SIGINT, SIGTSTP) only to foreground job groups while preserving background running daemons. Solved via tcsetpgrp() and terminal control flags.",
          fr: "Acheminer les signaux SIGINT/SIGTSTP uniquement aux processus du premier plan sans tuer le shell ni perturber les tâches en arrière-plan. Résolu avec tcsetpgrp() et gestion des process groups.",
        },
        learnings: {
          en: "Concrete mastery of low-level virtual memory mapping, CPU cache alignment (16-byte aligned blocks), and POSIX process lifecycles.",
          fr: "Maîtrise concrète de la mémoire virtuelle, de l'alignement mémoire sur 16 octets et de la table des processus du noyau Linux.",
        },
        codeSnippet: {
          language: "c",
          title: "allocator.c // Block Coalescing Algorithm",
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
      title: "Modular Fullstack Web Platform",
      category: "web",
      year: "2025",
      featured: true,
      translations: {
        en: {
          tagline: "End-to-end fullstack platform built with Next.js 15, TypeScript & PostgreSQL",
          description:
            "A modern, responsive fullstack web application focusing on high-load responsiveness, server-side data fetching, structured database schema, and strict type safety.",
          highlights: [
            "Next.js App Router with Server Actions and Optimistic UI updates",
            "Relational database modeling with PostgreSQL and automated migrations",
            "Secure session management, role-based access control (RBAC), and RESTful endpoints",
          ],
          metricBadge: "Sub-100ms API Latency // 100% Type-Safe",
        },
        fr: {
          tagline: "Plateforme web fullstack modulaire en Next.js 15, TypeScript & PostgreSQL",
          description:
            "Application web fullstack moderne axée sur la réactivité, le rendu côté serveur optimisé, la modélisation de base de données relationnelle et la sécurité des données.",
          highlights: [
            "Architecture Next.js App Router avec Server Actions et mise à jour d'interface réactive",
            "Modélisation de base de données relationnelle PostgreSQL et migrations automatisées",
            "Authentification sécurisée, contrôle d'accès par rôles (RBAC) et API typées de bout en bout",
          ],
          metricBadge: "Latence API < 100ms // 100% Typage Strict",
        },
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Bun"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Creating a secure, scalable web platform that ensures snappy user interaction under slow network conditions while maintaining strict database integrity and role security.",
          fr: "Concevoir une application web sécurisée et hautement réactive, fluide même avec une latence réseau dégradée, tout en assurant l'intégrité stricte des transactions en base.",
        },
        role: {
          en: "Fullstack developer: implemented schema migrations, Server Actions validation with Zod, optimistic UI updates, and responsive UI layout.",
          fr: "Développeur fullstack : schéma relationnel, validation stricte des Server Actions via Zod, mises à jour optimistes de l'interface et intégration Tailwind.",
        },
        architecture: {
          en: "Leveraged Next.js App Router with React Server Components (RSC) to minimize client bundle size. Server actions handle mutations directly with PostgreSQL connection pooling.",
          fr: "Exploitation de Next.js App Router avec React Server Components pour réduire le bundle JavaScript client. Les mutations transitent par Server Actions avec pool de connexions PostgreSQL.",
        },
        metrics: {
          en: [
            "100% TypeScript coverage with zero any types across client and server",
            "Lighthouse Performance score of 98/100 and First Contentful Paint < 0.6s",
            "Database queries optimized with indexes yielding average response times < 25ms",
          ],
          fr: [
            "Couverture TypeScript 100% avec 0 type 'any' côté client comme serveur",
            "Score Google Lighthouse de 98/100 et First Contentful Paint inférieur à 0,6s",
            "Requêtes SQL indexées assurant un temps d'exécution moyen inférieur à 25ms",
          ],
        },
        challenges: {
          en: "Eliminating UI layout shifts (CLS) while hydrating dynamic user permissions. Solved via cookie-based server session verification prior to initial render.",
          fr: "Éliminer les décalages de mise en page (CLS) lors du chargement des droits utilisateurs. Résolu via validation serveur des sessions en amont du premier affichage.",
        },
        learnings: {
          en: "Deep understanding of React Server Components mental model, efficient database indexing strategies, and modern CSS fluid spacing.",
          fr: "Maîtrise du cycle de vie des React Server Components, des stratégies d'indexation B-Tree en SQL et de l'optimisation des bundles web.",
        },
      },
    },
    {
      id: "packet-sniffer-inspector",
      title: "Raw Network Packet Sniffer & Inspector",
      category: "network",
      year: "2024",
      featured: false,
      translations: {
        en: {
          tagline: "Low-level network packet capture and protocol dissection utility in C",
          description:
            "Command-line tool utilizing raw sockets to capture, decode, and visualize Ethernet, IP, TCP, UDP, and ICMP headers in real-time.",
          highlights: [
            "Raw socket capture on Linux (AF_PACKET / SOCK_RAW)",
            "Binary decoding of layer 2, 3, and 4 protocol headers",
            "Hexdump viewer and traffic filtering by IP/port",
          ],
          metricBadge: "Layer 2-4 Dissection // Microsecond Latency",
        },
        fr: {
          tagline: "Outil d'inspection et de capture de paquets réseau bruts en C",
          description:
            "Utilitaire en ligne de commande exploitant les sockets brutes pour capturer, décoder et analyser les en-têtes Ethernet, IP, TCP, UDP et ICMP en temps réel.",
          highlights: [
            "Capture réseau via sockets brutes sous Linux (AF_PACKET / SOCK_RAW)",
            "Décodage binaire précis des couches 2, 3 et 4 du modèle OSI",
            "Affichage hexdump formaté et filtrage du trafic par IP et port",
          ],
          metricBadge: "Dissection Couches 2 à 4 // Latence microseconde",
        },
      },
      technologies: ["C", "Raw Sockets", "Network Protocols", "Wireshark", "Linux CLI"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Observing and diagnosing unencrypted network traffic without relying on bulky GUI tools, extracting packet fields down to raw byte offsets.",
          fr: "Capturer et disséquer le trafic réseau local sans dépendance à des interfaces lourdes, en analysant directement les octets bruts des trames.",
        },
        role: {
          en: "Created the binary parsing pipeline, byte endianness conversions (ntohs/ntohl), and formatted terminal hexdump visualizer.",
          fr: "Création de la chaîne de décodage binaire, conversion d'endianness réseau (ntohs/ntohl) et affichage couleur formaté en terminal.",
        },
        architecture: {
          en: "Opens a raw socket bound to all network interfaces (ETH_P_ALL). Dispatches received Ethernet frames through dedicated protocol decoders.",
          fr: "Ouverture d'une socket brute Linux (AF_PACKET, SOCK_RAW, htons(ETH_P_ALL)) et distribution des trames reçues vers des parseurs dédiés.",
        },
        metrics: {
          en: [
            "Processes up to 10,000 packets/second without buffer overruns",
            "Accurate validation of IPv4 checksums and TCP flag combinations (SYN/ACK/FIN)",
          ],
          fr: [
            "Capacité d'analyse jusqu'à 10 000 paquets/seconde sans saturation de tampon",
            "Validation exacte des sommes de contrôle IPv4 et des drapeaux TCP (SYN/ACK/FIN/RST)",
          ],
        },
        challenges: {
          en: "Handling network byte order vs host byte order correctly across heterogeneous processor architectures.",
          fr: "Gestion rigoureuse du boutisme (endianness Big Endian réseau vs Little Endian x86_64) sur chaque champ d'en-tête.",
        },
        learnings: {
          en: "In-depth understanding of the OSI model, IP fragmentation, and kernel promiscuous mode mechanics.",
          fr: "Compréhension approfondie du modèle OSI, de la fragmentation IP et du mode promiscuous des interfaces réseau.",
        },
      },
    },
    {
      id: "swiss-design-system",
      title: "Swiss Typography & Minimalist UI System",
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
          metricBadge: "WCAG AAA Contrast // 60 FPS Transitions",
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
          metricBadge: "Contraste WCAG AAA // Animations 60 FPS",
        },
      },
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
      githubUrl: "https://github.com/mehddium",
      caseStudy: {
        problem: {
          en: "Web interfaces are often cluttered with slow animations and unreadable contrast. The goal was to engineer a high-efficiency design system focusing on instant clarity.",
          fr: "De nombreuses interfaces web souffrent de lourdeurs visuelles et d'un manque d'accessibilité. L'objectif était de concevoir un système UI ultra-lisible basé sur les principes suisses.",
        },
        role: {
          en: "UI/UX Designer & Frontend Engineer: defined typography scales in Figma, engineered reusable React tokens, and validated WCAG compliance.",
          fr: "Designer UI/UX & Ingénieur Frontend : conception des échelles typographiques sous Figma, développement des composants React et audit WCAG.",
        },
        architecture: {
          en: "Built around semantic HTML5, CSS custom properties for theme tokens, and accessible ARIA attributes.",
          fr: "Architecture basée sur HTML5 sémantique, variables CSS pour les tokens et conformité totale avec les attributs ARIA.",
        },
        metrics: {
          en: [
            "100% compliance with WCAG AAA color contrast ratios",
            "Zero runtime styling overhead via compile-time Tailwind CSS",
          ],
          fr: [
            "Conformité 100% aux ratios de contraste WCAG AAA",
            "Zéro surcoût d'exécution grâce à la compilation statique Tailwind CSS",
          ],
        },
        challenges: {
          en: "Achieving high aesthetic impact while keeping bundle size negligible.",
          fr: "Maximiser l'élégance visuelle tout en garantissant un poids de bundle quasi nul.",
        },
        learnings: {
          en: "The power of typographic hierarchy and restraint in professional developer tooling.",
          fr: "L'impact de la retenue visuelle et de la hiérarchie typographique dans les outils pour développeurs.",
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
          title: "Computer Science & Software Engineering",
          institution: "University / Engineering Curriculum",
          description:
            "Rigorous technical education covering operating systems internals, computer architecture, low-level C programming, algorithm design, data structures, network protocols, and fullstack software development.",
          skills: ["C Programming", "Unix/Linux Internals", "Networking (TCP/IP)", "Fullstack Web", "Databases"],
        },
        fr: {
          title: "Cursus Informatique & Ingénierie Logicielle",
          institution: "Université / Cursus d'Ingénieur",
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
          title: "Major Systems, Network & Web Engineering",
          institution: "Academic & Technical Lab",
          description:
            "Led and built multiple end-to-end technical deliverables: POSIX network servers, custom shell interpreters, memory management tools, and collaborative web platforms with Git/CI-CD workflows.",
          skills: ["Multi-threading", "POSIX APIs", "Git Flow & CI/CD", "Next.js", "System Architecture"],
        },
        fr: {
          title: "Projets Majeurs Systèmes, Réseaux & Web",
          institution: "Laboratoire Académique & Projets Personnels",
          description:
            "Conception et livraison de projets d'envergure : serveurs réseau POSIX multi-threads, interpréteur de commandes Unix, allocateurs mémoire et plateformes web collaboratives avec intégration continue.",
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
          institution: "Independent Projects",
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
        en: "Academic project supervisor on low-level POSIX and C architecture",
        fr: "Supervision des projets de programmation système et réseaux en C",
      },
      text: {
        en: "Mehdi demonstrates rare rigor when dealing with low-level concurrency, memory allocation, and POSIX network protocols. His code is clean, methodically tested with Valgrind, and shows an engineering maturity far ahead of standard students.",
        fr: "Mehdi fait preuve d'une rigueur remarquable sur les sujets bas niveau, la concurrence multi-threads et les protocoles réseau. Son code est structuré, systématiquement profilé sous Valgrind et dénote une vraie maturité d'ingénieur.",
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
        en: "Collaborated on fullstack Next.js and relational database architectures",
        fr: "Collaboration sur les projets d'applications web Next.js et bases de données",
      },
      text: {
        en: "Working with Mehdi is seamless: he brings the same performance-oriented mindset from systems programming into modern TypeScript and Next.js applications. Strong problem-solving abilities and great attention to UX details.",
        fr: "Travailler avec Mehdi est un vrai plaisir : il applique l'exigence de rigueur et d'optimisation de la programmation système au développement web moderne en TypeScript et Next.js. Esprit d'équipe et grand souci du détail.",
      },
    },
  ] as Recommendation[],

  skillGroups: [
    {
      nameKey: "systems",
      translations: { en: "Systems & Low-Level C", fr: "Systèmes & C Bas Niveau" },
      skills: [
        { name: "C (C99 / C11)", level: "Advanced" },
        { name: "POSIX Sockets & TCP/IP", level: "Advanced" },
        { name: "pthreads & Concurrency", level: "Advanced" },
        { name: "Linux Kernel API & Processes", level: "Advanced" },
        { name: "GDB & Valgrind (Profiling)", level: "Advanced" },
        { name: "Dynamic Memory Allocation", level: "Advanced" },
      ],
    },
    {
      nameKey: "web",
      translations: { en: "Modern Fullstack Web", fr: "Web Fullstack Moderne" },
      skills: [
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "TypeScript 5", level: "Advanced" },
        { name: "React 19", level: "Advanced" },
        { name: "PostgreSQL & SQL", level: "Proficient" },
        { name: "Tailwind CSS v4", level: "Advanced" },
        { name: "REST APIs & WebSockets", level: "Advanced" },
      ],
    },
    {
      nameKey: "devops",
      translations: { en: "DevOps & Environments", fr: "DevOps & Environnements" },
      skills: [
        { name: "Linux / Unix Environments", level: "Advanced" },
        { name: "Git Flow & Collaboration", level: "Advanced" },
        { name: "GitHub Actions CI/CD", level: "Proficient" },
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "Makefiles & Build Tools", level: "Advanced" },
        { name: "Bun & Node.js Runtime", level: "Advanced" },
      ],
    },
    {
      nameKey: "tools",
      translations: { en: "Engineering & Design Tools", fr: "Outils d'Ingénierie & Design" },
      skills: [
        { name: "Figma (UI/UX Architecture)", level: "Proficient" },
        { name: "Wireshark (Network Analysis)", level: "Proficient" },
        { name: "Neovim & VS Code", level: "Advanced" },
        { name: "Bruno / Postman API Client", level: "Proficient" },
        { name: "Bash Scripting", level: "Advanced" },
        { name: "WCAG / Opquast Web Quality", level: "Advanced" },
      ],
    },
  ] as SkillGroup[],
};
