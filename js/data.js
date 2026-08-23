/**
 * Données bilingues (Français / 中文) du CV & Portfolio - Espoir Chinois (M. Espoir J. TOSSOU)
 * Permet un basculement instantané entre Français et Chinois (Mandarin).
 */

const cvData = {
  fr: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      timeline: "Parcours",
      projects: "Réalisations",
      community: "Réseaux (+430k)",
      services: "Services",
      testimonials: "Avis",
      contact: "Contact",
      pdfBtn: "CV PDF"
    },
    personal: {
      fullName: "M. Espoir. J TOSSOU (Tossou Mawuto Espoir Judicael)",
      nickname: "Espoir Chinois",
      title: "Interprète, Traducteur Chinois-Français, Responsable QHSE, Auteur & Coach",
      dynamicTitles: [
        "Interprète de Projet Chinois-Français",
        "Responsable Management QHSE Certifié",
        "Auteur & Écrivain Pédagogique",
        "Coach de Langue Chinoise & Mentor",
        "Négociateur International & Diplomate de Terrain",
        "Créateur de Contenu (+430k abonnés)"
      ],
      status: "🟢 Disponible pour missions d'interprétation, coaching & projets internationaux",
      bio: "Interprète de Projet et Traducteur professionnel Chinois-Français, Responsable Management QHSE certifié, Auteur et Coach de langue. Fort d'une expérience confirmée sur des projets d'envergure internationale (Stecol, Huayu/CBG Guinée, Sinohydro, HNRB), je garantis une communication fluide, une gestion humaine rigoureuse et une résolution efficace des défis de terrain.",
      email: "tossouespoir130@gmail.com",
      phone: "+229 96 38 58 64",
      wechat: "mawuto1",
      permis: "Permis B",
      location: "Cotonou (Bénin) • Mobilité Internationale (Permis B)",
      avatar: "assets/images/espoir-chinois.jpg",
      links: {
        facebook: "https://www.facebook.com/espoirchinois",
        tiktok: "https://www.tiktok.com/@espoirchinois",
        youtube: "https://www.youtube.com/@EspoirChinois",
        whatsapp: "https://wa.me/22996385864",
        linkedin: "https://linkedin.com"
      }
    },
    socialCards: [
      {
        platform: "Facebook Officiel",
        handle: "Espoir Chinois",
        followers: "+300 000 Abonnés",
        icon: "📘",
        color: "#1877f2",
        description: "Page officielle « Espoir Chinois » : vidéos quotidiennes de cours, podcasts interactifs et échanges directs avec la communauté.",
        btnText: "Rejoindre la page Facebook ↗",
        url: "https://www.facebook.com/espoirchinois"
      },
      {
        platform: "TikTok Officiel",
        handle: "@espoirchinois",
        followers: "Près de 100 000 Abonnés",
        icon: "🎵",
        color: "#fe2c55",
        description: "Vidéos dynamiques et astuces pratiques : prononciation du mandarin, décodage des tons et immersion culturelle.",
        btnText: "Suivre sur TikTok ↗",
        url: "https://www.tiktok.com/@espoirchinois"
      },
      {
        platform: "YouTube Officiel",
        handle: "@EspoirChinois",
        followers: "+30 000 Abonnés",
        icon: "▶️",
        color: "#ff0000",
        description: "Leçons structurées de chinois, explications approfondies, masterclasses et retours d'expérience sur les chantiers internationaux.",
        btnText: "S'abonner sur YouTube ↗",
        url: "https://www.youtube.com/@EspoirChinois"
      },
      {
        platform: "WhatsApp Professionnel",
        handle: "+229 96 38 58 64",
        followers: "Contact Direct & Mentorat",
        icon: "💬",
        color: "#25d366",
        description: "Canal direct pour vos demandes d'interprétation de projet, devis, coaching 'Chinois Master' ou partenariats d'affaires.",
        btnText: "Échanger sur WhatsApp ↗",
        url: "https://wa.me/22996385864"
      }
    ],
    stats: [
      { value: "430k+", label: "Communauté Digitale", icon: "👥" },
      { value: "7+", label: "Années d'Expérience", icon: "🏆" },
      { value: "HSK 5", label: "Certification Chinois", icon: "🇨🇳" },
      { value: "QHSE", label: "Management Certifié", icon: "🛡️" }
    ],
    interests: [
      { name: "Auteur & Écriture Pédagogique", icon: "✍️" },
      { name: "Coach de Langue & Mentorat", icon: "🎓" },
      { name: "Voyages & Immersion Culturelle", icon: "✈️" },
      { name: "Grande Culture Générale", icon: "🌍" },
      { name: "Sports & Dépassement", icon: "⚽" },
      { name: "Cinéma & Arts Visuels", icon: "🎬" },
      { name: "Musique & Rythmes du Monde", icon: "🎵" }
    ],
    skillsCategories: [
      {
        id: "languages",
        title: "Langues & Interprétation",
        icon: "🌐",
        skills: [
          { name: "Chinois Mandarin (HSK 5 / Bilingue pro)", level: 95, tag: "HSK 5 / Avancé" },
          { name: "Français (Langue maternelle)", level: 100, tag: "Natif" },
          { name: "Interprétation de Projet & Réunions Techniques", level: 95, tag: "Expert" },
          { name: "Traduction Technique BTP, Mines & Énergie", level: 95, tag: "Expert" },
          { name: "Procédures Administratives & Juridiques Bilingues", level: 90, tag: "Avancé" }
        ]
      },
      {
        id: "qhse-management",
        title: "QHSE & Gestion du Personnel",
        icon: "🛡️",
        skills: [
          { name: "Management QHSE (Qualité, Hygiène, Sécurité, Environnement)", level: 95, tag: "Certifié BMCAF" },
          { name: "Gestion du Personnel & Relations Employés", level: 95, tag: "Expert" },
          { name: "Connaissance Approfondie de la Loi du Travail", level: 90, tag: "Expert" },
          { name: "Leadership Industriel & Management d'Équipe Projet", level: 90, tag: "Avancé" }
        ]
      },
      {
        id: "negotiation",
        title: "Négociation & Résolution de Problèmes",
        icon: "🤝",
        skills: [
          { name: "Résolution de Problèmes Complexes de Terrain", level: 95, tag: "Expert" },
          { name: "Négociation Internationale Chine-Afrique", level: 95, tag: "Expert" },
          { name: "Médiation Sociale & Désamorçage de Conflits", level: 95, tag: "Expert" },
          { name: "Diplomatie Interculturelle & Liaison Institutionnelle", level: 95, tag: "Expert" }
        ]
      },
      {
        id: "digital-culture",
        title: "Digital, Auteur & Pédagogie",
        icon: "🌍",
        skills: [
          { name: "Création de Contenu Éducatif (+430k abonnés)", level: 95, tag: "Expert" },
          { name: "Coaching Linguistique & Auteur Pédagogique", level: 95, tag: "Auteur" },
          { name: "Grande Culture Générale & Curiosité du Monde", level: 100, tag: "Passionné" },
          { name: "Ouverture d'Esprit & Adaptabilité Totale", level: 100, tag: "Atout majeur" }
        ]
      }
    ],
    experiences: [
      {
        role: "Interprète de Projet (Chinois-Français)",
        company: "Stecol Corporation",
        period: "Fin 2024 - Présent (2025 - 2026)",
        location: "Bénin",
        type: "CDI / Grands Travaux",
        description: "Interprète de Projet sur les programmes d'infrastructures majeurs conduits par Stecol Corporation. Coordination linguistique, traduction simultanée/consécutive et liaison permanente entre direction chinoise, ingénieurs et équipes locales.",
        achievements: [
          "Interprète de Projet référent pour l'ensemble des réunions techniques et contractuelles.",
          "Gestion et désamorçage préventif des incompréhensions culturelles sur site.",
          "Accompagnement des négociations contractuelles et suivi administratif de terrain."
        ],
        technologies: ["Interprète de Projet", "Mandarin Technique", "Coordination BTP", "Négociation"]
      },
      {
        role: "Interprète, Traducteur Chinois-Français & Chargé des Employés",
        company: "Société de Coopération Huayu en Guinée SARL (Jiangsu Huayu)",
        period: "Novembre 2022 - 2024",
        location: "Kamsar, Guinée",
        type: "Projet Minier & Industriel",
        description: "Projet de construction de la station de traitement des eaux usées de Kamsar pour la CBG (Compagnie des Bauxites de Guinée). Interprétation technique, conformité environnementale et gestion des employés.",
        achievements: [
          "Traduction des protocoles d'ingénierie et des normes de sécurité pour la CBG.",
          "Gestion du personnel local et conciliation avec le management chinois.",
          "Obtention de la certification de langue chinoise HSK 5 en Guinée."
        ],
        technologies: ["CBG Guinée", "Station Traitement Eaux", "Gestion du Personnel", "HSK 5"]
      },
      {
        role: "Interprète Chinois-Français de Chantier & Chargé du Personnel / Juridique",
        company: "SINOHYDRO",
        period: "Août 2021 - Octobre 2022",
        location: "Glazoué, Bénin",
        type: "Projet Barrage Hydraulique",
        description: "Projet de barrage hydraulique de Glazoué. Interprète et traducteur de chantier, de réunion, des procédures administratives, des affaires juridiques et chargé du personnel.",
        achievements: [
          "Prise en charge intégrale des procédures administratives et juridiques du projet.",
          "Traduction technique de génie hydraulique et réunions de chantier.",
          "Gestion des ressources humaines et respect de la législation du travail."
        ],
        technologies: ["Barrage Hydraulique", "Affaires Juridiques", "Gestion RH", "Traduction Technique"]
      },
      {
        role: "Interprète Chinois-Français de Chantier & Chargé des Employés",
        company: "SINOHYDRO",
        period: "Juillet 2020 - Janvier 2021",
        location: "Aplahoué, Bénin",
        type: "Projet 10 Stades Omnisports",
        description: "Projet de construction de 10 stades omnisports. Traduction de chantier, réunions de coordination et gestion des relations avec les employés.",
        achievements: [
          "Coordination quotidienne entre ingénieurs chinois et équipes locales.",
          "Supervision linguistique des consignes de sécurité et plannings d'exécution."
        ],
        technologies: ["Stades Omnisports", "Génie Civil", "Relations Employés"]
      },
      {
        role: "Interprète & Traducteur Chinois-Français",
        company: "Hunan Road and Bridge (HNRB)",
        period: "Avril 2019 - Janvier 2020",
        location: "Bohicon, Natitingou, Bénin",
        type: "Projet Routier",
        description: "Projet de construction de la route de Natitingou. Interprétation de terrain et traduction des directives de chantier.",
        achievements: [
          "Assistance permanente aux ingénieurs et techniciens sur le tracé routier.",
          "Rédaction de comptes-rendus bilingues et fluidification des échanges."
        ],
        technologies: ["Construction Routière", "Ouvrages d'Art", "Interprétation Chantier"]
      },
      {
        role: "Interprète & Traducteur Chinois-Français",
        company: "MING LI FENG S.A",
        period: "Décembre 2018 - Janvier 2019",
        location: "Cotonou, Bénin",
        type: "Équipements Médicaux",
        description: "Vente d'équipements médicaux. Traduction commerciale, négociation et accompagnement des clients professionnels.",
        achievements: [
          "Traduction des notices et spécifications techniques d'appareillages médicaux.",
          "Facilitation des négociations commerciales."
        ],
        technologies: ["Équipements Médicaux", "Négociation Commerciale"]
      }
    ],
    educations: [
      {
        diploma: "Certification Responsable Management QHSE (Parcours Complet)",
        institution: "Bureau d'Études et de Formation BMCAF & KBQL-Tunisie",
        period: "Octobre 2022 - Décembre 2022",
        description: "Certification professionnelle complète en Management QHSE (Qualité, Hygiène, Sécurité, Environnement). Spécialisations : Leadership, Management industriel et Management d'équipe projet."
      },
      {
        diploma: "Certifications Officielles de Langue Chinoise (HSK 5, HSK 4 & HSK 3)",
        institution: "Institut Confucius d'Abomey-Calavi & Ministère de l'Éducation (Hanban)",
        period: "2015 - 2018",
        description: "3 années d'études intensives en langue et culture chinoises. Validation des examens HSK 3, HSK 4 et niveau HSK 5 validé en Guinée."
      },
      {
        diploma: "Licence 3 en Sciences Naturelles (CBG : Chimie - Biologie - Géologie)",
        institution: "Université d'Abomey-Calavi (UAC)",
        period: "2012 - 2015",
        description: "Niveau Licence 3 (3ème année d'études universitaires) en sciences de la nature et environnement."
      },
      {
        diploma: "Baccalauréat Scientifique (Série D)",
        institution: "CEG Akassato (AKASSATO)",
        period: "2012",
        description: "Obtention du Baccalauréat Série D au CEG Akassato."
      }
    ],
    projects: [
      {
        id: "communaute-espoir-chinois",
        title: "Espoir Chinois - Programme « Chinois Master » & Ouvrages",
        category: "content",
        categoryLabel: "Auteur, Livres & Formations (+430k)",
        badge: "+430k Abonnés • Auteur",
        image: "assets/images/espoir-chinois.jpg",
        description: "Écosystème pédagogique de référence et livres rédigés par Espoir Tossou pour permettre aux francophones d'apprendre le mandarin rapidement et efficacement.",
        features: [
          "Programme de coaching d'élite « Chinois Master »",
          "Livre à succès « 100 Phrases pour parler chinois » & e-book « 30 Phrases clés »",
          "+300 000 abonnés sur Facebook avec cours vidéos quotidiens",
          "+100 000 abonnés sur TikTok & +30 000 sur YouTube (@EspoirChinois)"
        ],
        technologies: ["Chinois Master", "100 Phrases pour parler chinois", "YouTube @EspoirChinois", "Facebook (+300k)", "TikTok (+100k)"],
        demoUrl: "https://www.youtube.com/@EspoirChinois",
        githubUrl: "https://www.facebook.com/espoirchinois"
      },
      {
        id: "station-eaux-kamsar-cbg",
        title: "Station de Traitement des Eaux Usées de Kamsar - CBG (Guinée)",
        category: "interpretation",
        categoryLabel: "Mines, Énergie & Environnement",
        badge: "Kamsar, Guinée",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
        description: "Projet de grande ampleur pour la Compagnie des Bauxites de Guinée (CBG) mené par la Société de Coopération Huayu. Interprétation technique, conformité environnementale et gestion des employés.",
        features: [
          "Traduction simultanée des réunions d'ingénierie et de sécurité CBG",
          "Gestion quotidienne des équipes locales et conciliation sociale",
          "Application stricte des protocoles QHSE sur site minier"
        ],
        technologies: ["CBG Guinée", "Traitement des Eaux", "QHSE", "Gestion RH"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      },
      {
        id: "barrage-hydraulique-glazoue",
        title: "Construction du Barrage Hydraulique de Glazoué - Sinohydro",
        category: "interpretation",
        categoryLabel: "Grands Travaux Hydrauliques",
        badge: "Glazoué, Bénin",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
        description: "Construction d'un barrage hydraulique stratégique. Rôle central dans l'interprétation de chantier, la prise en charge des affaires juridiques et la gestion des équipes.",
        features: [
          "Traduction des dossiers administratifs et juridiques du projet",
          "Facilitation du dialogue entre management chinois et personnel béninois",
          "Suivi rigoureux des règles de sécurité et de conformité"
        ],
        technologies: ["Barrage Hydraulique", "Droit du Travail", "Sinohydro", "Médiation"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      },
      {
        id: "stecol-interpretation-coordination",
        title: "Interprète de Projet - Stecol Corporation",
        category: "interpretation",
        categoryLabel: "Interprétation & Grands Projets",
        badge: "Mission en Cours (Interprète de Projet)",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
        description: "Interprète de Projet sur les chantiers d'envergure de Stecol Corporation au Bénin, assurant une parfaite liaison technique, stratégique et managériale entre la direction chinoise et les équipes locales.",
        features: [
          "Interprète de Projet référent pour l'ensemble des réunions de direction",
          "Supervision et transmission des protocoles d'ingénierie et de conformité",
          "Médiation, négociation et prévention des litiges de chantier"
        ],
        technologies: ["Interprète de Projet", "Mandarin technique", "Ingénierie BTP", "Négociation", "Gestion de projet"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      }
    ],
    services: [
      {
        icon: "🇨🇳",
        title: "Interprétation & Traduction Bilingue",
        description: "Interprétation consécutive et simultanée sur chantiers BTP/Mines, réunions de direction, négociations de contrats et visites d'usines en Chine et en Afrique."
      },
      {
        icon: "🎓",
        title: "Coaching Linguistique & Formations de Chinois",
        description: "Coach de langue expérimenté. Programmes d'accompagnement sur-mesure pour professionnels, cadres et étudiants souhaitant maîtriser le mandarin rapidement."
      },
      {
        icon: "✍️",
        title: "Auteur & Écriture Pédagogique",
        description: "Conception et rédaction d'ouvrages, manuels d'apprentissage, guides pratiques et supports de formation pour démystifier la langue et la culture chinoises."
      },
      {
        icon: "🛡️",
        title: "Management QHSE & Négociation",
        description: "Responsable Management QHSE certifié. Supervision de la sécurité sur site, respect de la loi du travail, diplomatie de terrain et gestion d'équipes multiculturelles."
      }
    ],
    testimonials: [
      {
        name: "Direction de Projet",
        role: "Cadre Exécutif @ Stecol Corp",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote: "Espoir Chinois est bien plus qu'un interprète. Il comprend instantanément les subtilités culturelles, anticipe les besoins techniques et sait résoudre les situations complexes sur nos chantiers avec un grand calme et un professionnalisme remarquable."
      },
      {
        name: "Responsable des Opérations",
        role: "Partenaire @ Huayu SARL / CBG (Guinée)",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        quote: "Pendant notre collaboration à Kamsar, Espoir a été la clé de voûte entre nos ingénieurs chinois et les équipes locales. Sa double compétence linguistique et gestion RH/QHSE est un atout rare."
      },
      {
        name: "Apprenant & Entrepreneur",
        role: "Membre Communauté Espoir Chinois (+430k)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        quote: "Une pédagogie lumineuse et une culture générale impressionnante. Grâce aux enseignements d'Espoir Chinois, j'ai pu apprendre le mandarin et réussir mes échanges avec des partenaires en Chine !"
      }
    ]
  },

  /* ==========================================================================
     CHINESE (中文版 - 官方规范专业翻译)
     ========================================================================== */
  zh: {
    nav: {
      home: "首页",
      skills: "技能",
      timeline: "履历",
      projects: "业绩",
      community: "社交",
      services: "服务",
      testimonials: "评价",
      contact: "联系",
      pdfBtn: "下载简历"
    },
    personal: {
      fullName: "苏波 (M. Espoir. J TOSSOU)",
      nickname: "苏波 (Espoir Chinois)",
      title: "资深中法双语项目翻译官 | QHSE安全总监 | 畅销书作家与语言导师",
      dynamicTitles: [
        "资深中法双语项目翻译官",
        "国际认证QHSE安全环保经理",
        "中非商务谈判与涉外危机协调专家",
        "中文畅销书作家与语言导师",
        "知名教育内容创作者 (全网43万+粉丝)"
      ],
      status: "🟢 随时承接中资企业海外工程翻译、高层商务谈判与高端语言培训",
      bio: "苏波 (M. Espoir. J TOSSOU) —— 专业资深中法双语项目翻译官、国际认证QHSE安全总监、畅销书作家及语言导师。长年服务于中国电建市政集团 (Stecol)、华宇建设/几内亚美铝 (CBG)、中国水利水电 (Sinohydro)、湖南路桥 (HNRB) 等中资跨国央企。精通中非跨文化商务谈判、劳工法律法规、属地人员管理及突发纠纷调解。全网拥有超43万忠实学员与合作客户。",
      email: "tossouespoir130@gmail.com",
      phone: "+229 96 38 58 64",
      wechat: "mawuto1",
      permis: "驾照 B本",
      location: "贝宁科托努 • 接受全球派驻与国际出差 (驾照B本)",
      avatar: "assets/images/espoir-chinois.jpg",
      links: {
        facebook: "https://www.facebook.com/espoirchinois",
        tiktok: "https://www.tiktok.com/@espoirchinois",
        youtube: "https://www.youtube.com/@EspoirChinois",
        whatsapp: "https://wa.me/22996385864",
        linkedin: "https://linkedin.com"
      }
    },
    socialCards: [
      {
        platform: "Facebook 官方主页",
        handle: "Espoir Chinois",
        followers: "关注者突破30万+",
        icon: "📘",
        color: "#1877f2",
        description: "每日发布实用中文教学视频、跨文化商务口语要点，与数十万法语区学员紧密互动。",
        btnText: "访问 Facebook 官方主页 ↗",
        url: "https://www.facebook.com/espoirchinois"
      },
      {
        platform: "TikTok 官方频道",
        handle: "@espoirchinois",
        followers: "关注者近10万",
        icon: "🎵",
        color: "#fe2c55",
        description: "高热度短视频精粹，涵盖汉语发音纠错、中国当代风貌及海外工程生活实录。",
        btnText: "关注 TikTok 官方频道 ↗",
        url: "https://www.tiktok.com/@espoirchinois"
      },
      {
        platform: "YouTube 官方频道",
        handle: "@EspoirChinois",
        followers: "订阅突破3万+",
        icon: "▶️",
        color: "#ff0000",
        description: "系统化精品中文课程、中非商务会谈深度解说、大师课系列与国际工程实战心得。",
        btnText: "订阅 YouTube 官方频道 ↗",
        url: "https://www.youtube.com/@EspoirChinois"
      },
      {
        platform: "WhatsApp / 微信专属直通",
        handle: "WeChat: mawuto1 / WhatsApp",
        followers: "商务直联与专属辅导",
        icon: "💬",
        color: "#25d366",
        description: "中资企业项目翻译派驻、中高级商务谈判口译及「Chinois Master」培训咨询直通渠道。",
        btnText: "立即通过 WhatsApp 洽谈 ↗",
        url: "https://wa.me/22996385864"
      }
    ],
    stats: [
      { value: "43万+", label: "全网关注者", icon: "👥" },
      { value: "7年+", label: "国际工程翻译经验", icon: "🏆" },
      { value: "HSK 5级", label: "官方汉语最高级认证", icon: "🇨🇳" },
      { value: "QHSE", label: "国际安全管理认证", icon: "🛡️" }
    ],
    interests: [
      { name: "写作与教学出版", icon: "✍️" },
      { name: "语言教学与导师培训", icon: "🎓" },
      { name: "跨国旅行与文化探索", icon: "✈️" },
      { name: "世界博览与综合通识", icon: "🌍" },
      { name: "体育与体能挑战", icon: "⚽" },
      { name: "电影与视听艺术", icon: "🎬" },
      { name: "世界音乐与律动", icon: "🎵" }
    ],
    skillsCategories: [
      {
        id: "languages",
        title: "语言与工程同传翻译",
        icon: "🌐",
        skills: [
          { name: "普通话 / 商务汉语 (HSK 5级 熟练精通)", level: 95, tag: "HSK 5级" },
          { name: "法语 (母语级别 / 精准表达)", level: 100, tag: "母语级" },
          { name: "工程现场交传与高级商务同传", level: 95, tag: "专家级" },
          { name: "工程建筑、矿业与能源专业笔译", level: 95, tag: "专家级" },
          { name: "双语涉外行政与法律合同程序", level: 90, tag: "熟练" }
        ]
      },
      {
        id: "qhse-management",
        title: "QHSE安全管理与属地化员工管理",
        icon: "🛡️",
        skills: [
          { name: "QHSE体系管理 (质量/职业健康/安全/环保)", level: 95, tag: "BMCAF认证" },
          { name: "属地化员工招聘、培训与日常管理", level: 95, tag: "专家级" },
          { name: "熟练掌握当地劳工法与劳动合同规范", level: 90, tag: "专家级" },
          { name: "工业现场领导力与项目团队高效协作", level: 90, tag: "高级" }
        ]
      },
      {
        id: "negotiation",
        title: "涉外商务谈判与危机纠纷调解",
        icon: "🤝",
        skills: [
          { name: "现场复杂问题与突发危机快速解决", level: 95, tag: "专家级" },
          { name: "中非大型项目国际商务与物资谈判", level: 95, tag: "专家级" },
          { name: "中外劳资纠纷化解与社区公共关系协调", level: 95, tag: "专家级" },
          { name: "政府部门行政沟通与跨文化外交协调", level: 95, tag: "专家级" }
        ]
      },
      {
        id: "digital-culture",
        title: "数字化教育、著作与中文辅导",
        icon: "🌍",
        skills: [
          { name: "数字化中文教学内容创作 (43万+粉丝)", level: 95, tag: "顶尖博主" },
          { name: "语言著作出版与定制化中文速成辅导", level: 95, tag: "作家/导师" },
          { name: "博闻强识与跨文化极高适应力", level: 100, tag: "核心优势" },
          { name: "敏锐洞察力与职业保密操守", level: 100, tag: "严守职业道德" }
        ]
      }
    ],
    experiences: [
      {
        role: "资深项目翻译官 (中法双语)",
        company: "中国电建市政集团 (Stecol Corporation)",
        period: "2024年底 - 至今 (2025 - 2026)",
        location: "贝宁",
        type: "全职 / 国家级重点工程",
        description: "担任电建市政大型国家级基础设施项目的核心项目翻译官。负责高层会议、技术交底、合同商务谈判的全程同声及交替传译，保障中方管理团队与当地工程师及监理部门的高效对接。",
        achievements: [
          "主导关键工程会议与外事商务谈判的双语口译与记录。",
          "有效防范化解跨文化沟通障碍，促进现场安全施工与进度推进。",
          "协助中方团队处理属地法律事务与行政合规手续。"
        ],
        technologies: ["项目首席翻译", "工程技术汉语", "施工协调", "商务谈判"]
      },
      {
        role: "中法翻译官 & 属地员工管理主管",
        company: "江苏华宇建设几内亚有限公司 (Jiangsu Huayu)",
        period: "2022年11月 - 2024年",
        location: "几内亚 卡姆萨尔",
        type: "驻外派遣 / 矿山工业项目",
        description: "参与几内亚美铝 (CBG) 卡姆萨尔污水处理站重点工程。负责现场技术与安全翻译、数百名属地员工管理、劳工关系协调及对外联络。",
        achievements: [
          "精准传达CBG严苛的技术标准与安全环保(QHSE)规范。",
          "成功化解多次劳资纠纷，保障工程平稳按期推进。",
          "在几内亚工作期间顺利通过并取得中国国家汉语水平考试HSK 5级证书。"
        ],
        technologies: ["美铝CBG项目", "水处理工程", "员工管理", "HSK 5级"]
      },
      {
        role: "现场中法翻译官 & 劳务人事/法务专员",
        company: "中国水利水电建设集团 (Sinohydro)",
        period: "2021年8月 - 2022年10月",
        location: "贝宁 格拉祖埃",
        type: "水利水电工程",
        description: "格拉祖埃水坝重点工程。全面负责工地技术翻译、行政及法律事务审批手续办理，并兼任现场劳工管理专员。",
        achievements: [
          "全程独立跟进项目行政审批、涉外法务及劳工合同事务。",
          "负责水利工程技术会议口译，准确率与专业度深受中外方好评。",
          "保障施工队伍严格遵守贝宁劳动法及安全施工制度。"
        ],
        technologies: ["水坝水利", "法律合规", "人事管理", "技术翻译"]
      },
      {
        role: "工地中法翻译官 & 员工管理",
        company: "中国水利水电建设集团 (Sinohydro)",
        period: "2020年7月 - 2021年1月",
        location: "贝宁 阿普拉惠",
        type: "综合体育场馆工程",
        description: "贝宁全国10座综合体育场馆建设项目。负责工地实时翻译、多方协调会议口译及属地工人管理。",
        achievements: [
          "保障中方工程技术人员与当地工人无障碍即时沟通。",
          "落实安全施工与进度安排的双语监督。"
        ],
        technologies: ["体育场馆", "土木工程", "人员协调"]
      },
      {
        role: "中法双语工程翻译官",
        company: "湖南路桥建设集团 (HNRB)",
        period: "2019年4月 - 2020年1月",
        location: "贝宁 博希康/纳蒂廷古",
        type: "公路基础设施工程",
        description: "纳蒂廷古重点公路工程。负责沿线施工技术口译、指令下达及双语工程简报编写。",
        achievements: [
          "现场全天候协助中方道路工程师与测绘人员推进施工。",
          "高效整理并撰写双语工程纪要。"
        ],
        technologies: ["公路交通", "桥梁涵洞", "现场口译"]
      },
      {
        role: "商务中法翻译官",
        company: "明丽丰贸易公司 (MING LI FENG S.A)",
        period: "2018年12月 - 2019年1月",
        location: "贝宁 科托努",
        type: "医疗器械进出口",
        description: "专业医疗器械销售与贸易。负责产品技术说明翻译、商务谈判与客户洽谈接待。",
        achievements: [
          "翻译专业医疗仪器说明书并促成多笔大宗订单采购。",
          "协助中方负责人与当地采购商顺畅签约。"
        ],
        technologies: ["医疗设备", "商务洽谈", "外贸口译"]
      }
    ],
    educations: [
      {
        diploma: "QHSE安全环保总监全流程资格认证 (Management QHSE)",
        institution: "突尼斯 BMCAF & KBQL 专业工程与管理研修中心",
        period: "2022年10月 - 12月",
        description: "专业系统化培训：企业质量、职业健康、施工安全与环境体系管理(QHSE)。主修：现场卓越领导力、工业企业安全管理、工程项目团队敏捷管理。"
      },
      {
        diploma: "中国官方汉语水平考试最高认证 (HSK 5级, HSK 4级, HSK 3级)",
        institution: "阿波美卡拉维大学孔子学院 & 中国教育部中外语言交流合作中心",
        period: "2015年 - 2018年",
        description: "3年沉浸式中文及跨文化深造。先后高分通过HSK 3级、HSK 4级，并于驻几内亚期间顺利考取HSK 5级证书。"
      },
      {
        diploma: "自然科学本科 (CBG：化学-生物-地质)",
        institution: "贝宁阿波美卡拉维国立大学 (UAC)",
        period: "2012年 - 2015年",
        description: "完成3年全日制大学理科本科课程（化学、生物与地质学方向）。"
      },
      {
        diploma: "理科高中毕业会考文凭 (Baccalauréat D)",
        institution: "阿卡萨托公立中学 (CEG Akassato)",
        period: "2012年",
        description: "荣获理科Bac D毕业文凭。"
      }
    ],
    projects: [
      {
        id: "communaute-espoir-chinois",
        title: "「Chinois Master」旗舰教学体系与畅销书籍",
        category: "content",
        categoryLabel: "出版著作与线上教育 (43万+粉丝)",
        badge: "全网43万+粉丝 • 作家",
        image: "assets/images/espoir-chinois.jpg",
        description: "由托苏·埃斯波尔创立的领先法语区中文教育体系与实战图书，帮助数十万非洲与法语区学员快速掌握实用汉语口语与对华商务交流。",
        features: [
          "旗舰级中文速成培训课程「Chinois Master」",
          "畅销力作《学会说汉语的100个实用句型》及电子书《30句精选口语》",
          "Facebook官方主页粉丝突破30万人，每日分享口语与文化短片",
          "TikTok粉丝超10万，YouTube (@EspoirChinois) 订阅超3万"
        ],
        technologies: ["Chinois Master", "100句说中文", "YouTube @EspoirChinois", "Facebook (+30万)", "TikTok (+10万)"],
        demoUrl: "https://www.youtube.com/@EspoirChinois",
        githubUrl: "https://www.facebook.com/espoirchinois"
      },
      {
        id: "station-eaux-kamsar-cbg",
        title: "几内亚美铝 (CBG) 卡姆萨尔污水处理站工程",
        category: "interpretation",
        categoryLabel: "矿业、能源与环保工程",
        badge: "几内亚 卡姆萨尔",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
        description: "几内亚美铝公司 (CBG) 核心环保工程。负责现场高难度技术传译、环保施工标准推行及数百名属地员工管理。",
        features: [
          "美铝CBG监理团队技术交底与安全会议全程翻译",
          "属地员工日常管理与劳务纠纷前置化解",
          "严格执行矿区最高级别QHSE施工与环境保护标准"
        ],
        technologies: ["几内亚美铝", "污水处理", "QHSE体系", "员工人事"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      },
      {
        id: "barrage-hydraulique-glazoue",
        title: "中国水电 (Sinohydro) 格拉祖埃水利水坝工程",
        category: "interpretation",
        categoryLabel: "大型水利水坝建设",
        badge: "贝宁 格拉祖埃",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
        description: "国家重点水利枢纽工程。担纲现场施工口译、多部门涉外法律程序对接及属地劳工日常管理工作。",
        features: [
          "水坝技术文件与法律行政程序全套双语办理",
          "促进中方技术干部与属地工人的良好协作关系",
          "严格落实劳动法合规与工地安全文明施工"
        ],
        technologies: ["水坝工程", "涉外法务", "中国水电", "劳工协调"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      },
      {
        id: "stecol-interpretation-coordination",
        title: "电建市政 (Stecol Corporation) 重点工程项目翻译官",
        category: "interpretation",
        categoryLabel: "国家级工程与外事翻译",
        badge: "在建重点项目 (项目总翻译)",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
        description: "电建市政国家级大型工程项目总翻译官。协调中方项目经理部与当地政府、监理及分包单位全方位日常对接。",
        features: [
          "项目管理层高级别商务、技术与进度推进会议口译",
          "工程规范与质量安全标准的精准双语贯通",
          "跨文化公关协调与现场突发事件稳妥调解"
        ],
        technologies: ["项目首席翻译", "工程汉语", "市政BTP", "涉外协调"],
        demoUrl: "#contact",
        githubUrl: "#timeline"
      }
    ],
    services: [
      {
        icon: "🇨🇳",
        title: "中法双语工程同声/交替传译",
        description: "矿山工程、水利水电、市政公路、高层商务洽谈、对华考察与跨国代表团全程专业陪同口译与技术笔译。"
      },
      {
        icon: "🎓",
        title: "定制化中文导师培训与口语速成",
        description: "拥有7年教学经验的资深语言导师，为涉华企业高管、外贸从业者和留学生量身定制高效实用的中文速成课程。"
      },
      {
        icon: "✍️",
        title: "语言著作出版与学习教材研发",
        description: "畅销书作家，专业研发适合法语国家学员的中文自学图书、词汇手册与中非商务跨文化实战教材。"
      },
      {
        icon: "🛡️",
        title: "QHSE安全环保管理与涉外纠纷调解",
        description: "持证QHSE管理专家。熟练把控属地劳工法规、化解劳资矛盾、协助中资企业在非洲稳健合规经营。"
      }
    ],
    testimonials: [
      {
        name: "项目总工程师 / 项目经理",
        role: "高管团队 @ 电建市政 (Stecol Corp)",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote: "埃斯波尔不仅仅是一名优秀的翻译官，更是一位深谙中国文化、精通现场管理的得力助手。在复杂工况与谈判中，他沉着稳重、翻译精准，是我们项目不可或缺的中流砥柱。"
      },
      {
        name: "现场运营与安全主管",
        role: "合作伙伴 @ 华宇建设 / 几内亚美铝 CBG",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        quote: "在几内亚卡姆萨尔项目合作期间，埃斯波尔展现了顶尖的双语沟通能力和出色的QHSE安全管理意识，极大促进了中外员工的默契融合。"
      },
      {
        name: "对华贸易企业家",
        role: "「Chinois Master」优秀学员 (全网43万关注者代表)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        quote: "跟随埃斯波尔老师学习中文让我受益匪浅。他的教学通俗易懂，让我在与中国供应商直接谈判时信心倍增，顺利签下多笔重要外贸订单！"
      }
    ]
  }
};

window.cvData = cvData;
