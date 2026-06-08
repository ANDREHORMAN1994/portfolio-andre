export type Language = 'pt' | 'en';

export const isLanguage = (value: string | null): value is Language =>
  value === 'pt' || value === 'en';

export const translations = {
  pt: {
    site: {
      homeTitle: 'André Horman | Desenvolvedor Full Stack',
      projectsTitle: 'Projetos | André Horman',
      description:
        'Desenvolvedor Full Stack com experiência em aplicações web escaláveis, interfaces responsivas, integrações com APIs e produtos digitais.'
    },
    language: {
      selectorLabel: 'Selecionar idioma',
      portuguese: 'Exibir site em português',
      english: 'Exibir site em inglês'
    },
    navigation: {
      home: 'Início',
      projects: 'Projetos',
      experience: 'Experiência',
      enableDarkTheme: 'Ativar tema escuro',
      enableLightTheme: 'Ativar tema claro'
    },
    hero: {
      avatarAlt: 'Meu avatar',
      reactLogoAlt: 'Logotipo do React',
      hello: 'Olá',
      iAm: 'Eu sou',
      andre: 'o André 👋',
      frontEnd: 'Dev Front-End',
      backEnd: 'Dev Back-End',
      introduction: '// Minha apresentação',
      showContacts: 'Exibir contatos',
      showInfos: 'Voltar para apresentação'
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Resumo',
      pictureAlt: 'Minha imagem do GitHub',
      introduction:
        'Olá! Meu nome é André e sou Desenvolvedor Full Stack. Conheci a programação em meados de 2020 e desde então me apaixonei pela área de tecnologia. 💚 Tenho experiência na construção de interfaces escaláveis, responsivas e performáticas, integração com APIs REST, desenvolvimento de componentes reutilizáveis e aplicações com dados em tempo real.',
      collaboration:
        'Gosto de trabalhar em produtos que resolvem problemas reais e valorizo ambientes colaborativos, com troca de conhecimento, boas práticas e comunicação clara. 🚀',
      stackPrefix: 'Minhas principais stacks são:'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'desenvolvidos',
      viewMore: 'Ver mais',
      viewAll: 'Ver todos os projetos',
      technologies: 'Tecnologias Utilizadas 👨‍💻',
      viewProject: 'Ver projeto 👀',
      sourceCode: (title: string) => `Ver código-fonte de ${title} no GitHub`
    },
    experiences: {
      title: 'Desde 2020',
      subtitle: 'em evolução constante',
      items: [
        {
          year: 'Fev 2024 - Fev 2026',
          status: 'Desenvolvedor Front-End',
          organization: 'Opsin Finance',
          description:
            'Desenvolvi e mantive o frontend de uma plataforma Web3 de analytics para blockchain e DeFi, criando interfaces escaláveis com React, Next.js, TypeScript e Tailwind CSS. Também integrei APIs REST, carteiras digitais e dados em tempo real para recursos de trading e fluxos multi-chain.',
          width: '60%'
        },
        {
          year: 'Nov 2023 - Mar 2024',
          status: 'Desenvolvedor Back-End',
          organization: 'Starta Solutions',
          description:
            'Desenvolvi aplicações server-side com Node.js e Express.js, construindo e otimizando APIs REST para o frontend. Também trabalhei com modelagem e manutenção de bancos MySQL via Sequelize ORM em sprints de produto.',
          width: '40%'
        },
        {
          year: 'Out 2023 - Jan 2024',
          status: 'Desenvolvedor Web',
          organization: 'Codante',
          description:
            'Construí interfaces responsivas e acessíveis com React, Next.js e React Native, colaborando com designers no Figma para transformar protótipos em layouts fiéis e aplicar princípios mobile-first em experiências web e mobile.',
          width: '40%'
        },
        {
          year: 'Ago 2021 - Jul 2023',
          status: 'Instrutor de Tecnologia',
          organization: 'Trybe',
          description:
            'Mentorei mais de 100 desenvolvedores iniciantes em JavaScript, HTML, CSS e React.js. Conduzi aulas ao vivo, workshops e sessões baseadas em projetos, realizei code reviews e contribuí para melhorias curriculares e processos internos.',
          width: '60%'
        },
        {
          year: '2020 - 2021',
          status: 'Formação Full Stack',
          organization: 'Trybe',
          description:
            'Formação intensiva em Desenvolvimento Web Full Stack com tecnologias amplamente utilizadas pelo mercado.',
          width: '40%'
        }
      ]
    },
    knowledge: {
      title: 'Conhecimentos',
      subtitle: 'Hard Skills',
      previous: 'Exibir conhecimentos anteriores',
      next: 'Exibir próximos conhecimentos'
    },
    contact: {
      titleFirstLine: 'Vamos trabalhar',
      titleSecondLine: 'juntos ?',
      subtitle: 'Entre em contato comigo 🤝',
      chooseMethod: 'Escolha uma forma de contato:',
      name: 'Nome',
      message: 'Mensagem',
      hiddenField: 'Não preencha este campo',
      send: 'ENVIAR MENSAGEM',
      whatsappMessage: (name: string, message: string) =>
        `Olá, meu nome é ${name} e tenho uma mensagem para você: ${message}`,
      fallbackError:
        '🚨 Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente! 😓'
    },
    footer: {
      backToTop: 'Voltar ao topo',
      github: 'Acessar GitHub',
      linkedin: 'Acessar LinkedIn',
      resume: 'Acessar currículo'
    }
  },
  en: {
    site: {
      homeTitle: 'André Horman | Full Stack Developer',
      projectsTitle: 'Projects | André Horman',
      description:
        'Full Stack Developer experienced in scalable web applications, responsive interfaces, API integrations and digital products.'
    },
    language: {
      selectorLabel: 'Select language',
      portuguese: 'Display site in Portuguese',
      english: 'Display site in English'
    },
    navigation: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      enableDarkTheme: 'Enable dark theme',
      enableLightTheme: 'Enable light theme'
    },
    hero: {
      avatarAlt: 'My avatar',
      reactLogoAlt: 'React logo',
      hello: 'Hello',
      iAm: 'I am',
      andre: 'André 👋',
      frontEnd: 'Front-End Dev',
      backEnd: 'Back-End Dev',
      introduction: '// My introduction',
      showContacts: 'Display contacts',
      showInfos: 'Return to introduction'
    },
    about: {
      title: 'About me',
      subtitle: 'Profile',
      pictureAlt: 'My GitHub profile picture',
      introduction:
        'Hello! My name is André and I am a Full Stack Developer. I discovered programming around 2020 and have been passionate about technology ever since. 💚 I have experience building scalable, responsive and high-performance interfaces, integrating REST APIs, developing reusable components and creating applications with real-time data.',
      collaboration:
        'I enjoy working on products that solve real problems and value collaborative environments with knowledge sharing, good practices and clear communication. 🚀',
      stackPrefix: 'My main technologies are:'
    },
    projects: {
      title: 'Projects',
      subtitle: 'developed',
      viewMore: 'Learn more',
      viewAll: 'View all projects',
      technologies: 'Technologies Used 👨‍💻',
      viewProject: 'View project 👀',
      sourceCode: (title: string) => `View ${title} source code on GitHub`
    },
    experiences: {
      title: 'Since 2020',
      subtitle: 'continuously evolving',
      items: [
        {
          year: 'Feb 2024 - Feb 2026',
          status: 'Front-End Developer',
          organization: 'Opsin Finance',
          description:
            'I developed and maintained the frontend of a Web3 analytics platform for blockchain and DeFi, building scalable interfaces with React, Next.js, TypeScript and Tailwind CSS. I also integrated REST APIs, digital wallets and real-time data for trading features and multi-chain flows.',
          width: '60%'
        },
        {
          year: 'Nov 2023 - Mar 2024',
          status: 'Back-End Developer',
          organization: 'Starta Solutions',
          description:
            'I developed server-side applications with Node.js and Express.js, building and optimizing REST APIs for the frontend. I also worked with MySQL database modeling and maintenance using Sequelize ORM in product sprints.',
          width: '40%'
        },
        {
          year: 'Oct 2023 - Jan 2024',
          status: 'Web Developer',
          organization: 'Codante',
          description:
            'I built responsive and accessible interfaces with React, Next.js and React Native, collaborating with designers in Figma to turn prototypes into faithful layouts and apply mobile-first principles across web and mobile experiences.',
          width: '40%'
        },
        {
          year: 'Aug 2021 - Jul 2023',
          status: 'Technology Instructor',
          organization: 'Trybe',
          description:
            'I mentored more than 100 junior developers in JavaScript, HTML, CSS and React.js. I led live classes, workshops and project-based sessions, performed code reviews and contributed to curriculum and internal process improvements.',
          width: '60%'
        },
        {
          year: '2020 - 2021',
          status: 'Full Stack Program',
          organization: 'Trybe',
          description:
            'Intensive Full Stack Web Development program focused on widely adopted technologies.',
          width: '40%'
        }
      ]
    },
    knowledge: {
      title: 'Skills',
      subtitle: 'Hard Skills',
      previous: 'Display previous skills',
      next: 'Display next skills'
    },
    contact: {
      titleFirstLine: 'Let’s work',
      titleSecondLine: 'together?',
      subtitle: 'Get in touch with me 🤝',
      chooseMethod: 'Choose a contact method:',
      name: 'Name',
      message: 'Message',
      hiddenField: 'Do not fill in this field',
      send: 'SEND MESSAGE',
      whatsappMessage: (name: string, message: string) =>
        `Hello, my name is ${name} and I have a message for you: ${message}`,
      fallbackError:
        '🚨 An error occurred while sending your message. Please try again! 😓'
    },
    footer: {
      backToTop: 'Back to top',
      github: 'Visit GitHub',
      linkedin: 'Visit LinkedIn',
      resume: 'View résumé'
    }
  }
};
