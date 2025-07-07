// Translation system for portfolio website
const translations = {
    en: {
        // Page title
        'page-title': 'Soufiane Belgana - Full-Stack Developer',
        
        // Navigation
        'nav-logo': 'SB',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-services': 'Services',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-name': 'Soufiane Belgana',
        'hero-tagline': 'Full-Stack Developer | Digital Entrepreneur',
        'hero-location': 'Based in Marrakech, Morocco',
        'hero-cta': 'View My Work',
        'scroll-down': 'Scroll Down',
        
        // About section
        'about-title': 'About Me',
        'photo-placeholder': 'Photo',
        'about-bio': 'Born in Ouarzazate, now based in Marrakech. Python developer with background in Economic Science (Master\'s degree). Co-founder of Digital Afous SARL.',
        'key-highlights': 'Key Highlights',
        'highlight-1': 'Freelancer & Employer',
        'highlight-2': 'Web3/Blockchain Developer',
        'highlight-3': 'Digital Branding Specialist',
        
        // Experience section
        'experience-title': 'Experience Timeline',
        'exp-2015-title': 'Photography Service Head',
        'exp-2015-company': 'Mazagan El Jadida',
        'exp-2017-title': 'Telemarketer',
        'exp-2017-company': 'Falfa Gatell',
        'exp-2019-title': 'Web Developer',
        'exp-2019-company': 'Doga Koleji (Istanbul)',
        'exp-2020-title': 'Freelance Full-Stack Developer',
        'exp-2020-status': 'Present',
        'exp-2021-title': 'Co-founder',
        'exp-2021-company': 'Digital Afous SARL',
        'exp-2021-status': 'Present',
        
        // Services section
        'services-title': 'Services',
        'service-1-title': 'Website Development & Optimization',
        'service-1-desc': 'Custom websites built with modern technologies and optimized for performance.',
        'service-2-title': 'Mobile App Development',
        'service-2-desc': 'Cross-platform mobile applications for iOS and Android.',
        'service-3-title': 'Web3/Blockchain Solutions',
        'service-3-desc': 'Decentralized applications and blockchain integration services.',
        'service-4-title': 'Digital Branding',
        'service-4-desc': 'Complete brand identity design and digital marketing strategies.',
        'service-5-title': 'Content Creation',
        'service-5-desc': 'Engaging content for websites, social media, and marketing campaigns.',
        'service-6-title': 'E-commerce Solutions',
        'service-6-desc': 'Complete online store development and marketplace integration.',
        
        // Projects section
        'projects-title': 'Projects Showcase',
        'project-image': 'Project Image',
        'project-1-title': 'Digital Afous SARL',
        'project-1-desc': 'Co-founded digital agency specializing in web development and digital marketing solutions.',
        'project-2-title': 'E-commerce Websites',
        'project-2-desc': 'Two specialized e-commerce platforms for artisanal products with custom features.',
        'project-3-title': 'Marketplace Stores',
        'project-3-desc': 'Successfully established and managed stores on Etsy and Amazon marketplaces.',
        
        // Why choose section
        'why-choose-title': 'Why Choose Me',
        'feature-1-title': 'Competitive Pricing',
        'feature-1-desc': 'Fair and transparent pricing for all project types.',
        'feature-2-title': 'Quality/Price Ratio > 1',
        'feature-2-desc': 'Exceptional value with premium quality deliverables.',
        'feature-3-title': 'Fast Delivery',
        'feature-3-desc': 'Quick turnaround times without compromising quality.',
        'feature-4-title': 'Professional Experience',
        'feature-4-desc': 'Years of experience in diverse technology projects.',
        'feature-5-title': 'Confidential Service',
        'feature-5-desc': 'Complete confidentiality and secure project handling.',
        
        // Contact section
        'contact-title': 'Get In Touch',
        'contact-info-title': 'Let\'s Work Together',
        'contact-pricing': 'Price varies by project scope - Contact for consultation',
        'meeting-options': 'Meeting Options:',
        'meeting-face': 'Face-to-face (Marrakech)',
        'meeting-online': 'Online',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',
        'form-success': 'Message sent successfully!',
        
        // Footer
        'footer-copyright': '© 2024 Soufiane Belgana',
        'footer-company': 'Digital Afous SARL',
        
        // Form validation errors
        'error-name': 'Name must be at least 2 characters long',
        'error-email': 'Please enter a valid email address',
        'error-subject': 'Subject must be at least 3 characters long',
        'error-message': 'Message must be at least 10 characters long'
    },
    
    ar: {
        // Page title
        'page-title': 'سفيان بلكانى - مطور ويب متكامل',
        
        // Navigation
        'nav-logo': 'س.ب',
        'nav-home': 'الرئيسية',
        'nav-about': 'نبذة عني',
        'nav-experience': 'الخبرة',
        'nav-services': 'الخدمات',
        'nav-projects': 'المشاريع',
        'nav-contact': 'التواصل',
        
        // Hero section
        'hero-name': 'سفيان بلكانى',
        'hero-tagline': 'مطور ويب متكامل | رائد أعمال رقمي',
        'hero-location': 'مقيم في مراكش، المغرب',
        'hero-cta': 'اطلع على أعمالي',
        'scroll-down': 'انتقل للأسفل',
        
        // About section
        'about-title': 'نبذة عني',
        'photo-placeholder': 'صورة',
        'about-bio': 'ولدت في ورزازات، وأقيم حالياً في مراكش. مطور بايثون مع خلفية في العلوم الاقتصادية (درجة الماجستير). شريك مؤسس في شركة Digital Afous SARL.',
        'key-highlights': 'النقاط المميزة',
        'highlight-1': 'مستقل وصاحب عمل',
        'highlight-2': 'مطور Web3/Blockchain',
        'highlight-3': 'متخصص في العلامات التجارية الرقمية',
        
        // Experience section
        'experience-title': 'الخبرة المهنية',
        'exp-2015-title': 'رئيس خدمات التصوير',
        'exp-2015-company': 'مازاغان الجديدة',
        'exp-2017-title': 'مسوق هاتفي',
        'exp-2017-company': 'فالفا غاتيل',
        'exp-2019-title': 'مطور ويب',
        'exp-2019-company': 'دوغا كوليجي (إسطنبول)',
        'exp-2020-title': 'مطور ويب متكامل مستقل',
        'exp-2020-status': 'حتى الآن',
        'exp-2021-title': 'شريك مؤسس',
        'exp-2021-company': 'Digital Afous SARL',
        'exp-2021-status': 'حتى الآن',
        
        // Services section
        'services-title': 'الخدمات',
        'service-1-title': 'تطوير وتحسين المواقع',
        'service-1-desc': 'مواقع مخصصة مبنية بتقنيات حديثة ومحسنة للأداء.',
        'service-2-title': 'تطوير تطبيقات الهاتف',
        'service-2-desc': 'تطبيقات متعددة المنصات لنظامي iOS و Android.',
        'service-3-title': 'حلول Web3/Blockchain',
        'service-3-desc': 'تطبيقات لامركزية وخدمات تكامل البلوك تشين.',
        'service-4-title': 'العلامات التجارية الرقمية',
        'service-4-desc': 'تصميم هوية العلامة التجارية الكاملة واستراتيجيات التسويق الرقمي.',
        'service-5-title': 'إنشاء المحتوى',
        'service-5-desc': 'محتوى جذاب للمواقع ووسائل التواصل الاجتماعي والحملات التسويقية.',
        'service-6-title': 'حلول التجارة الإلكترونية',
        'service-6-desc': 'تطوير متاجر إلكترونية كاملة وتكامل الأسواق الإلكترونية.',
        
        // Projects section
        'projects-title': 'معرض المشاريع',
        'project-image': 'صورة المشروع',
        'project-1-title': 'Digital Afous SARL',
        'project-1-desc': 'وكالة رقمية مؤسسة مشتركة متخصصة في تطوير الويب وحلول التسويق الرقمي.',
        'project-2-title': 'مواقع التجارة الإلكترونية',
        'project-2-desc': 'منصتان متخصصتان للتجارة الإلكترونية للمنتجات الحرفية مع ميزات مخصصة.',
        'project-3-title': 'متاجر الأسواق الإلكترونية',
        'project-3-desc': 'إنشاء وإدارة ناجحة لمتاجر على منصات Etsy و Amazon.',
        
        // Why choose section
        'why-choose-title': 'لماذا تختارني',
        'feature-1-title': 'أسعار تنافسية',
        'feature-1-desc': 'أسعار عادلة وشفافة لجميع أنواع المشاريع.',
        'feature-2-title': 'نسبة الجودة/السعر > 1',
        'feature-2-desc': 'قيمة استثنائية مع مخرجات عالية الجودة.',
        'feature-3-title': 'تسليم سريع',
        'feature-3-desc': 'أوقات تسليم سريعة دون التنازل عن الجودة.',
        'feature-4-title': 'خبرة مهنية',
        'feature-4-desc': 'سنوات من الخبرة في مشاريع تقنية متنوعة.',
        'feature-5-title': 'خدمة سرية',
        'feature-5-desc': 'سرية تامة ومعالجة آمنة للمشاريع.',
        
        // Contact section
        'contact-title': 'تواصل معي',
        'contact-info-title': 'لنعمل معاً',
        'contact-pricing': 'السعر يختلف حسب نطاق المشروع - تواصل للاستشارة',
        'meeting-options': 'خيارات الاجتماع:',
        'meeting-face': 'وجهاً لوجه (مراكش)',
        'meeting-online': 'عبر الإنترنت',
        'form-name': 'الاسم',
        'form-email': 'البريد الإلكتروني',
        'form-subject': 'الموضوع',
        'form-message': 'الرسالة',
        'form-submit': 'إرسال الرسالة',
        'form-sending': 'جاري الإرسال...',
        'form-success': 'تم إرسال الرسالة بنجاح!',
        
        // Footer
        'footer-copyright': '© 2024 سفيان بلكانى',
        'footer-company': 'Digital Afous SARL',
        
        // Form validation errors
        'error-name': 'يجب أن يكون الاسم على الأقل حرفين',
        'error-email': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
        'error-subject': 'يجب أن يكون الموضوع على الأقل 3 أحرف',
        'error-message': 'يجب أن تكون الرسالة على الأقل 10 أحرف'
    },
    
    de: {
        // Page title
        'page-title': 'Soufiane Belgana - Full-Stack Entwickler',
        
        // Navigation
        'nav-logo': 'SB',
        'nav-home': 'Startseite',
        'nav-about': 'Über mich',
        'nav-experience': 'Erfahrung',
        'nav-services': 'Dienstleistungen',
        'nav-projects': 'Projekte',
        'nav-contact': 'Kontakt',
        
        // Hero section
        'hero-name': 'Soufiane Belgana',
        'hero-tagline': 'Full-Stack Entwickler | Digitaler Unternehmer',
        'hero-location': 'Ansässig in Marrakesch, Marokko',
        'hero-cta': 'Meine Arbeit ansehen',
        'scroll-down': 'Nach unten scrollen',
        
        // About section
        'about-title': 'Über mich',
        'photo-placeholder': 'Foto',
        'about-bio': 'Geboren in Ouarzazate, jetzt ansässig in Marrakesch. Python-Entwickler mit Hintergrund in Wirtschaftswissenschaften (Master-Abschluss). Mitbegründer von Digital Afous SARL.',
        'key-highlights': 'Wichtige Highlights',
        'highlight-1': 'Freiberufler & Arbeitgeber',
        'highlight-2': 'Web3/Blockchain Entwickler',
        'highlight-3': 'Digital Branding Spezialist',
        
        // Experience section
        'experience-title': 'Erfahrungszeitleiste',
        'exp-2015-title': 'Leiter Fotografie-Service',
        'exp-2015-company': 'Mazagan El Jadida',
        'exp-2017-title': 'Telemarketer',
        'exp-2017-company': 'Falfa Gatell',
        'exp-2019-title': 'Web-Entwickler',
        'exp-2019-company': 'Doga Koleji (Istanbul)',
        'exp-2020-title': 'Freiberuflicher Full-Stack Entwickler',
        'exp-2020-status': 'Gegenwart',
        'exp-2021-title': 'Mitbegründer',
        'exp-2021-company': 'Digital Afous SARL',
        'exp-2021-status': 'Gegenwart',
        
        // Services section
        'services-title': 'Dienstleistungen',
        'service-1-title': 'Website-Entwicklung & Optimierung',
        'service-1-desc': 'Maßgeschneiderte Websites mit modernen Technologien und leistungsoptimiert.',
        'service-2-title': 'Mobile App Entwicklung',
        'service-2-desc': 'Plattformübergreifende mobile Anwendungen für iOS und Android.',
        'service-3-title': 'Web3/Blockchain Lösungen',
        'service-3-desc': 'Dezentrale Anwendungen und Blockchain-Integrationsdienste.',
        'service-4-title': 'Digital Branding',
        'service-4-desc': 'Komplettes Markenidentitätsdesign und digitale Marketingstrategien.',
        'service-5-title': 'Content-Erstellung',
        'service-5-desc': 'Ansprechende Inhalte für Websites, soziale Medien und Marketingkampagnen.',
        'service-6-title': 'E-Commerce Lösungen',
        'service-6-desc': 'Komplette Online-Shop-Entwicklung und Marktplatz-Integration.',
        
        // Projects section
        'projects-title': 'Projekt-Showcase',
        'project-image': 'Projektbild',
        'project-1-title': 'Digital Afous SARL',
        'project-1-desc': 'Mitbegründete Digitalagentur spezialisiert auf Webentwicklung und digitale Marketinglösungen.',
        'project-2-title': 'E-Commerce Websites',
        'project-2-desc': 'Zwei spezialisierte E-Commerce-Plattformen für handwerkliche Produkte mit benutzerdefinierten Funktionen.',
        'project-3-title': 'Marktplatz-Shops',
        'project-3-desc': 'Erfolgreich etablierte und verwaltete Shops auf Etsy und Amazon Marktplätzen.',
        
        // Why choose section
        'why-choose-title': 'Warum mich wählen',
        'feature-1-title': 'Wettbewerbsfähige Preise',
        'feature-1-desc': 'Faire und transparente Preisgestaltung für alle Projekttypen.',
        'feature-2-title': 'Qualität/Preis-Verhältnis > 1',
        'feature-2-desc': 'Außergewöhnlicher Wert mit Premium-Qualitäts-Lieferungen.',
        'feature-3-title': 'Schnelle Lieferung',
        'feature-3-desc': 'Schnelle Bearbeitungszeiten ohne Qualitätskompromisse.',
        'feature-4-title': 'Berufserfahrung',
        'feature-4-desc': 'Jahre der Erfahrung in vielfältigen Technologieprojekten.',
        'feature-5-title': 'Vertraulicher Service',
        'feature-5-desc': 'Vollständige Vertraulichkeit und sichere Projektabwicklung.',
        
        // Contact section
        'contact-title': 'Kontakt aufnehmen',
        'contact-info-title': 'Lassen Sie uns zusammenarbeiten',
        'contact-pricing': 'Preis variiert je nach Projektumfang - Kontakt für Beratung',
        'meeting-options': 'Meeting-Optionen:',
        'meeting-face': 'Persönlich (Marrakesch)',
        'meeting-online': 'Online',
        'form-name': 'Name',
        'form-email': 'E-Mail',
        'form-subject': 'Betreff',
        'form-message': 'Nachricht',
        'form-submit': 'Nachricht senden',
        'form-sending': 'Wird gesendet...',
        'form-success': 'Nachricht erfolgreich gesendet!',
        
        // Footer
        'footer-copyright': '© 2024 Soufiane Belgana',
        'footer-company': 'Digital Afous SARL',
        
        // Form validation errors
        'error-name': 'Name muss mindestens 2 Zeichen lang sein',
        'error-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        'error-subject': 'Betreff muss mindestens 3 Zeichen lang sein',
        'error-message': 'Nachricht muss mindestens 10 Zeichen lang sein'
    },
    
    zh: {
        // Page title
        'page-title': 'Soufiane Belgana - 全栈开发者',
        
        // Navigation
        'nav-logo': 'SB',
        'nav-home': '首页',
        'nav-about': '关于我',
        'nav-experience': '经验',
        'nav-services': '服务',
        'nav-projects': '项目',
        'nav-contact': '联系',
        
        // Hero section
        'hero-name': 'Soufiane Belgana',
        'hero-tagline': '全栈开发者 | 数字企业家',
        'hero-location': '居住在摩洛哥马拉喀什',
        'hero-cta': '查看我的作品',
        'scroll-down': '向下滚动',
        
        // About section
        'about-title': '关于我',
        'photo-placeholder': '照片',
        'about-bio': '出生于瓦尔扎扎特，现居马拉喀什。拥有经济学背景（硕士学位）的Python开发者。Digital Afous SARL联合创始人。',
        'key-highlights': '主要亮点',
        'highlight-1': '自由职业者和雇主',
        'highlight-2': 'Web3/区块链开发者',
        'highlight-3': '数字品牌专家',
        
        // Experience section
        'experience-title': '经验时间线',
        'exp-2015-title': '摄影服务主管',
        'exp-2015-company': 'Mazagan El Jadida',
        'exp-2017-title': '电话营销员',
        'exp-2017-company': 'Falfa Gatell',
        'exp-2019-title': '网页开发者',
        'exp-2019-company': 'Doga Koleji（伊斯坦布尔）',
        'exp-2020-title': '自由全栈开发者',
        'exp-2020-status': '至今',
        'exp-2021-title': '联合创始人',
        'exp-2021-company': 'Digital Afous SARL',
        'exp-2021-status': '至今',
        
        // Services section
        'services-title': '服务',
        'service-1-title': '网站开发与优化',
        'service-1-desc': '使用现代技术构建的定制网站，性能优化。',
        'service-2-title': '移动应用开发',
        'service-2-desc': 'iOS和Android跨平台移动应用程序。',
        'service-3-title': 'Web3/区块链解决方案',
        'service-3-desc': '去中心化应用程序和区块链集成服务。',
        'service-4-title': '数字品牌',
        'service-4-desc': '完整的品牌标识设计和数字营销策略。',
        'service-5-title': '内容创作',
        'service-5-desc': '为网站、社交媒体和营销活动创建引人入胜的内容。',
        'service-6-title': '电子商务解决方案',
        'service-6-desc': '完整的在线商店开发和市场集成。',
        
        // Projects section
        'projects-title': '项目展示',
        'project-image': '项目图片',
        'project-1-title': 'Digital Afous SARL',
        'project-1-desc': '联合创立的数字代理公司，专门从事网页开发和数字营销解决方案。',
        'project-2-title': '电子商务网站',
        'project-2-desc': '两个专门的手工产品电子商务平台，具有定制功能。',
        'project-3-title': '市场商店',
        'project-3-desc': '在Etsy和Amazon市场成功建立和管理商店。',
        
        // Why choose section
        'why-choose-title': '为什么选择我',
        'feature-1-title': '竞争性定价',
        'feature-1-desc': '所有项目类型的公平透明定价。',
        'feature-2-title': '质量/价格比 > 1',
        'feature-2-desc': '优质交付的卓越价值。',
        'feature-3-title': '快速交付',
        'feature-3-desc': '快速周转时间，不妥协质量。',
        'feature-4-title': '专业经验',
        'feature-4-desc': '在多样化技术项目中的多年经验。',
        'feature-5-title': '保密服务',
        'feature-5-desc': '完全保密和安全的项目处理。',
        
        // Contact section
        'contact-title': '联系我',
        'contact-info-title': '让我们合作',
        'contact-pricing': '价格因项目范围而异 - 联系咨询',
        'meeting-options': '会议选项：',
        'meeting-face': '面对面（马拉喀什）',
        'meeting-online': '在线',
        'form-name': '姓名',
        'form-email': '电子邮件',
        'form-subject': '主题',
        'form-message': '消息',
        'form-submit': '发送消息',
        'form-sending': '发送中...',
        'form-success': '消息发送成功！',
        
        // Footer
        'footer-copyright': '© 2024 Soufiane Belgana',
        'footer-company': 'Digital Afous SARL',
        
        // Form validation errors
        'error-name': '姓名必须至少2个字符',
        'error-email': '请输入有效的电子邮件地址',
        'error-subject': '主题必须至少3个字符',
        'error-message': '消息必须至少10个字符'
    },
    
    fr: {
        // Page title
        'page-title': 'Soufiane Belgana - Développeur Full-Stack',
        
        // Navigation
        'nav-logo': 'SB',
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-experience': 'Expérience',
        'nav-services': 'Services',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-name': 'Soufiane Belgana',
        'hero-tagline': 'Développeur Full-Stack | Entrepreneur Numérique',
        'hero-location': 'Basé à Marrakech, Maroc',
        'hero-cta': 'Voir mon travail',
        'scroll-down': 'Faire défiler vers le bas',
        
        // About section
        'about-title': 'À propos de moi',
        'photo-placeholder': 'Photo',
        'about-bio': 'Né à Ouarzazate, maintenant basé à Marrakech. Développeur Python avec une formation en Sciences Économiques (diplôme de Master). Co-fondateur de Digital Afous SARL.',
        'key-highlights': 'Points forts',
        'highlight-1': 'Freelance et Employeur',
        'highlight-2': 'Développeur Web3/Blockchain',
        'highlight-3': 'Spécialiste en Image de Marque Numérique',
        
        // Experience section
        'experience-title': 'Chronologie de l\'expérience',
        'exp-2015-title': 'Chef de Service Photographie',
        'exp-2015-company': 'Mazagan El Jadida',
        'exp-2017-title': 'Télévendeur',
        'exp-2017-company': 'Falfa Gatell',
        'exp-2019-title': 'Développeur Web',
        'exp-2019-company': 'Doga Koleji (Istanbul)',
        'exp-2020-title': 'Développeur Full-Stack Freelance',
        'exp-2020-status': 'Présent',
        'exp-2021-title': 'Co-fondateur',
        'exp-2021-company': 'Digital Afous SARL',
        'exp-2021-status': 'Présent',
        
        // Services section
        'services-title': 'Services',
        'service-1-title': 'Développement et Optimisation de Sites Web',
        'service-1-desc': 'Sites web personnalisés construits avec des technologies modernes et optimisés pour la performance.',
        'service-2-title': 'Développement d\'Applications Mobiles',
        'service-2-desc': 'Applications mobiles multiplateformes pour iOS et Android.',
        'service-3-title': 'Solutions Web3/Blockchain',
        'service-3-desc': 'Applications décentralisées et services d\'intégration blockchain.',
        'service-4-title': 'Image de Marque Numérique',
        'service-4-desc': 'Conception complète d\'identité de marque et stratégies de marketing numérique.',
        'service-5-title': 'Création de Contenu',
        'service-5-desc': 'Contenu engageant pour sites web, médias sociaux et campagnes marketing.',
        'service-6-title': 'Solutions E-commerce',
        'service-6-desc': 'Développement complet de boutiques en ligne et intégration de places de marché.',
        
        // Projects section
        'projects-title': 'Vitrine de Projets',
        'project-image': 'Image du Projet',
        'project-1-title': 'Digital Afous SARL',
        'project-1-desc': 'Agence numérique co-fondée spécialisée dans le développement web et les solutions de marketing numérique.',
        'project-2-title': 'Sites Web E-commerce',
        'project-2-desc': 'Deux plateformes e-commerce spécialisées pour produits artisanaux avec fonctionnalités personnalisées.',
        'project-3-title': 'Boutiques de Places de Marché',
        'project-3-desc': 'Établissement et gestion réussis de boutiques sur les places de marché Etsy et Amazon.',
        
        // Why choose section
        'why-choose-title': 'Pourquoi me choisir',
        'feature-1-title': 'Prix Compétitifs',
        'feature-1-desc': 'Tarification équitable et transparente pour tous types de projets.',
        'feature-2-title': 'Rapport Qualité/Prix > 1',
        'feature-2-desc': 'Valeur exceptionnelle avec des livrables de qualité premium.',
        'feature-3-title': 'Livraison Rapide',
        'feature-3-desc': 'Délais de livraison rapides sans compromettre la qualité.',
        'feature-4-title': 'Expérience Professionnelle',
        'feature-4-desc': 'Années d\'expérience dans des projets technologiques diversifiés.',
        'feature-5-title': 'Service Confidentiel',
        'feature-5-desc': 'Confidentialité complète et gestion sécurisée des projets.',
        
        // Contact section
        'contact-title': 'Entrer en Contact',
        'contact-info-title': 'Travaillons Ensemble',
        'contact-pricing': 'Le prix varie selon la portée du projet - Contactez pour consultation',
        'meeting-options': 'Options de Réunion :',
        'meeting-face': 'Face à face (Marrakech)',
        'meeting-online': 'En ligne',
        'form-name': 'Nom',
        'form-email': 'Email',
        'form-subject': 'Sujet',
        'form-message': 'Message',
        'form-submit': 'Envoyer le Message',
        'form-sending': 'Envoi en cours...',
        'form-success': 'Message envoyé avec succès !',
        
        // Footer
        'footer-copyright': '© 2024 Soufiane Belgana',
        'footer-company': 'Digital Afous SARL',
        
        // Form validation errors
        'error-name': 'Le nom doit contenir au moins 2 caractères',
        'error-email': 'Veuillez entrer une adresse email valide',
        'error-subject': 'Le sujet doit contenir au moins 3 caractères',
        'error-message': 'Le message doit contenir au moins 10 caractères'
    }
};

// Function to update page language
function updatePageLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[language] && translations[language][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document title
    const titleElement = document.querySelector('title[data-translate]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-translate');
        const titleTranslation = translations[language] && translations[language][titleKey];
        if (titleTranslation) {
            document.title = titleTranslation;
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Handle RTL languages
    if (language === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.fontFamily = 'Arial, sans-serif'; // Better Arabic font support
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.fontFamily = ''; // Reset to default
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && language !== 'en') {
        const descriptions = {
            ar: 'مطور ويب متكامل ورائد أعمال رقمي مقيم في مراكش، المغرب. متخصص في Web3 والبلوك تشين وحلول العلامات التجارية الرقمية.',
            de: 'Full-Stack Entwickler und digitaler Unternehmer ansässig in Marrakesch, Marokko. Spezialisiert auf Web3, Blockchain und digitale Branding-Lösungen.',
            zh: '居住在摩洛哥马拉喀什的全栈开发者和数字企业家。专门从事Web3、区块链和数字品牌解决方案。',
            fr: 'Développeur Full-Stack et entrepreneur numérique basé à Marrakech, Maroc. Spécialisé dans Web3, Blockchain et solutions de branding numérique.'
        };
        
        if (descriptions[language]) {
            metaDescription.content = descriptions[language];
        }
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, updatePageLanguage };
}

