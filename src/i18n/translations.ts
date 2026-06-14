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
      about: 'Sobre',
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
      backToProjects: 'Voltar para projetos',
      caseStudy: 'Detalhes do projeto',
      aboutProject: 'Sobre o projeto',
      projectDetails: 'Informações do projeto',
      category: 'Categoria',
      stack: 'Stack',
      techCount: (count: number) => `${count} tecnologias`,
      sourceCode: (title: string) => `Ver código-fonte de ${title} no GitHub`
    },
    experiences: {
      title: 'Desde 2020',
      subtitle: 'em evolução constante',
      previous: 'Exibir experiências anteriores',
      next: 'Exibir próximas experiências',
      items: [
        {
          year: 'Fev 2024 - Fev 2026',
          status: 'Desenvolvedor Front-End',
          organization: 'Opsin Finance',
          description: [
            'Frontend de plataforma Web3 para analytics blockchain e DeFi.',
            'Interfaces escaláveis com React, Next.js, TypeScript e Tailwind CSS.',
            'Integrações com APIs REST, carteiras digitais e dados em tempo real.'
          ],
          width: '50%'
        },
        {
          year: 'Nov 2023 - Mar 2024',
          status: 'Desenvolvedor Back-End',
          organization: 'Starta Solutions',
          description: [
            'Aplicações server-side com Node.js e Express.js.',
            'Construção e otimização de APIs REST para o frontend.',
            'Modelagem e manutenção de bancos MySQL com Sequelize ORM.'
          ],
          width: '50%'
        },
        {
          year: 'Out 2023 - Jan 2024',
          status: 'Desenvolvedor Web',
          organization: 'Codante',
          description: [
            'Interfaces responsivas e acessíveis com React, Next.js e React Native.',
            'Transformação de protótipos do Figma em layouts fiéis.',
            'Aplicação de princípios mobile-first em experiências web e mobile.'
          ],
          width: '50%'
        },
        {
          year: 'Ago 2021 - Jul 2023',
          status: 'Instrutor de Tecnologia',
          organization: 'Trybe',
          description: [
            'Mentoria de mais de 100 desenvolvedores iniciantes.',
            'Aulas ao vivo, workshops e sessões baseadas em projetos.',
            'Code reviews e melhorias curriculares e de processos internos.'
          ],
          width: '50%'
        },
        {
          year: '2020 - 2021',
          status: 'Formação Full Stack',
          organization: 'Trybe',
          description: [
            'Formação intensiva em Desenvolvimento Web Full Stack.',
            'Prática com tecnologias amplamente utilizadas pelo mercado.',
            'Base sólida em frontend, backend, bancos de dados e boas práticas.'
          ],
          width: '50%'
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
      about: 'About',
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
      backToProjects: 'Back to projects',
      caseStudy: 'Project details',
      aboutProject: 'About the project',
      projectDetails: 'Project information',
      category: 'Category',
      stack: 'Stack',
      techCount: (count: number) =>
        `${count} ${count === 1 ? 'technology' : 'technologies'}`,
      sourceCode: (title: string) => `View ${title} source code on GitHub`
    },
    experiences: {
      title: 'Since 2020',
      subtitle: 'continuously evolving',
      previous: 'Display previous experiences',
      next: 'Display next experiences',
      items: [
        {
          year: 'Feb 2024 - Feb 2026',
          status: 'Front-End Developer',
          organization: 'Opsin Finance',
          description: [
            'Frontend for a Web3 analytics platform focused on blockchain and DeFi.',
            'Scalable interfaces with React, Next.js, TypeScript and Tailwind CSS.',
            'REST API, digital wallet and real-time data integrations.'
          ],
          width: '50%'
        },
        {
          year: 'Nov 2023 - Mar 2024',
          status: 'Back-End Developer',
          organization: 'Starta Solutions',
          description: [
            'Server-side applications with Node.js and Express.js.',
            'REST API development and optimization for frontend applications.',
            'MySQL database modeling and maintenance with Sequelize ORM.'
          ],
          width: '50%'
        },
        {
          year: 'Oct 2023 - Jan 2024',
          status: 'Web Developer',
          organization: 'Codante',
          description: [
            'Responsive and accessible interfaces with React, Next.js and React Native.',
            'Figma prototypes translated into faithful layouts.',
            'Mobile-first principles applied across web and mobile experiences.'
          ],
          width: '50%'
        },
        {
          year: 'Aug 2021 - Jul 2023',
          status: 'Technology Instructor',
          organization: 'Trybe',
          description: [
            'Mentorship for more than 100 junior developers.',
            'Live classes, workshops and project-based sessions.',
            'Code reviews plus curriculum and internal process improvements.'
          ],
          width: '50%'
        },
        {
          year: '2020 - 2021',
          status: 'Full Stack Program',
          organization: 'Trybe',
          description: [
            'Intensive Full Stack Web Development program.',
            'Hands-on practice with widely adopted technologies.',
            'Solid foundation in frontend, backend, databases and best practices.'
          ],
          width: '50%'
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
