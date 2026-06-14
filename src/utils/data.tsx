import { type Language } from '@/i18n/translations';

export interface Project {
  id: number;
  title: string;
  icon?: string;
  type: string;
  imgUrl: string;
  description: Record<Language, string>;
  techs: string[];
  link: string;
  repo: string;
}

export interface LocalizedProject extends Omit<Project, 'description'> {
  description: string;
}

const myProjetcs: Project[] = [
  {
    id: 0,
    title: 'WEBCAM EMOTIONS',
    icon: '/images/cam.svg',
    type: 'Web Site',
    imgUrl: '/images/webcam-emotions.png',
    description: {
      pt: `WebCam Emotions é uma experiência web em React que combina Face API e React Webcam para detectar expressões faciais em tempo real. A interface transforma a câmera do usuário em um painel visual de emoções, destacando estados como felicidade, tristeza, surpresa e raiva com feedback imediato e interativo.`,
      en: `WebCam Emotions is a React web experience that combines Face API and React Webcam to detect facial expressions in real time. It turns the user's camera into an interactive emotion panel, highlighting states such as happiness, sadness, surprise and anger through immediate visual feedback.`
    },
    techs: [
      'React JS',
      'JavaScript',
      'Styled Components',
      'React WebCam',
      'Face API',
      'Vercel'
    ],
    link: 'https://webcam-emotions.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/webcam-emotions'
  },
  {
    id: 1,
    title: 'CLONE GPT',
    icon: '/images/bot.svg',
    type: 'Web Site',
    imgUrl: '/images/clone-gpt.png',
    description: {
      pt: `Clone GPT é uma interface conversacional construída com Next.js e integrada à API da OpenAI. O projeto reproduz um fluxo moderno de chat, com envio de prompts, respostas geradas por IA e uma experiência simples para explorar conversas em linguagem natural.`,
      en: `Clone GPT is a conversational interface built with Next.js and integrated with the OpenAI API. It recreates a modern chat flow with prompt submission, AI-generated responses and a simple experience for exploring natural-language conversations.`
    },
    techs: ['Next JS', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Vercel'],
    link: 'https://clone-gpt-openai.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/clone-gpt'
  },
  {
    id: 2,
    title: 'PIXEL ART GAME 🎨',
    type: 'Web Site',
    imgUrl: '/images/pixel-art-game.png',
    description: {
      pt: `Pixel Art Game combina criação livre e desafios cronometrados em uma experiência responsiva para desktop e mobile. Com React, Redux Toolkit, MUI e Styled Components, o jogador pinta grades em estilo 8/16 bits, reproduz imagens de referência e acompanha sua pontuação em um ranking.`,
      en: `Pixel Art Game blends free drawing and timed challenges in a responsive desktop and mobile experience. Built with React, Redux Toolkit, MUI and Styled Components, it lets players paint 8/16-bit grids, reproduce reference images and track scores on a ranking screen.`
    },
    techs: [
      'React JS',
      'Redux Toolkit',
      'Styled Components',
      'Material UI',
      'EsLint',
      'Vercel'
    ],
    link: 'https://pixel-art-game-andre-horman.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/pixel-art-game'
  },
  {
    id: 3,
    title: 'POKÉDEX VANILLA',
    icon: '/images/pokeball.svg',
    type: 'Web Site',
    imgUrl: '/images/pokedex-vanilla.png',
    description: {
      pt: `Pokédex Vanilla é uma aplicação web em HTML, CSS e JavaScript que consome a PokéAPI para apresentar os 151 primeiros Pokémon. O projeto prioriza uma interface inspirada na Pokédex, exibindo nome, tipo, altura, peso e habilidades com navegação direta e visual familiar.`,
      en: `Pokédex Vanilla is an HTML, CSS and JavaScript web app that consumes PokéAPI to present the first 151 Pokémon. It focuses on a familiar Pokédex-inspired interface with direct navigation through name, type, height, weight and ability details.`
    },
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    link: 'https://pokedex-vanilla-andre-horman.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/pokedex-vanilla'
  },
  {
    id: 4,
    title: 'HAPPY 😁',
    type: 'Web Site',
    imgUrl: '/images/happy-app.png',
    description: {
      pt: `Happy é uma aplicação web full stack que aproxima comunidades de lares de acolhimento. Com Node, Express, Prisma, PostgreSQL e Leaflet, permite cadastrar instituições, exibir unidades em um mapa interativo e organizar informações essenciais para visitas, como horários, público atendido e instruções.`,
      en: `Happy is a full-stack web application that connects communities with care homes. Built with Node, Express, Prisma, PostgreSQL and Leaflet, it supports institution registration, interactive map discovery and essential visit details such as opening hours, audience and instructions.`
    },
    techs: [
      'HTML',
      'Handlebars',
      'CSS',
      'TypeScript',
      'Zod',
      'Node JS',
      'Express',
      'Leaflet',
      'Prisma',
      'PostgreSQL',
      'Vercel'
    ],
    link: 'https://happy-app-andre-horman.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/happy-app'
  },
  {
    id: 5,
    title: 'SLIDO API 🥳',
    type: 'API Node JS',
    imgUrl: '/images/slido-api.png',
    description: {
      pt: `Slido API é uma API REST em Node.js e Express para gerenciar usuários, autenticação e registros de perguntas e respostas. O projeto usa MongoDB, Bcrypt, JWT e Swagger para oferecer CRUD, controle de acesso por perfis cliente/admin e endpoints documentados em uma base organizada e segura.`,
      en: `Slido API is a Node.js and Express REST API for managing users, authentication and question-and-answer records. It uses MongoDB, Bcrypt, JWT and Swagger to provide CRUD operations, client/admin role access and documented endpoints in an organized, security-minded backend.`
    },
    techs: [
      'Node JS',
      'Express',
      'Nodemon',
      'MongoDB',
      'EsLint',
      'Bcrypt',
      'Json Web Token (JWT)',
      'Swagger',
      'Vercel'
    ],
    link: 'https://slido-api.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/slido-API'
  },
  {
    id: 6,
    title: 'MEMORY GAME DBZ',
    icon: '/images/dragon-ball.png',
    type: 'Web Site',
    imgUrl: '/images/memory-game-dbz.png',
    description: {
      pt: `Memory Game DBZ é um jogo da memória em React e TypeScript com identidade visual inspirada em Dragon Ball Z. A experiência inclui tela inicial/login e uma partida cronometrada, na qual o jogador precisa encontrar pares de cartas no menor tempo possível.`,
      en: `Memory Game DBZ is a React and TypeScript memory game with a Dragon Ball Z-inspired visual identity. It includes an initial/login screen and a timed match flow where players find matching card pairs as quickly as possible.`
    },
    techs: ['React JS', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://memory-game-dbz.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/memory-game-dbz'
  },
  {
    id: 7,
    title: 'BLOG ANGULAR',
    icon: '/images/news-icon.png',
    type: 'Web Site',
    imgUrl: '/images/the-blog.png',
    description: {
      pt: `Blog Angular é uma aplicação de notícias construída com Angular e TypeScript, consumindo a News API para exibir manchetes atuais. O projeto explora componentes, serviços, diretivas e rotas em uma interface de blog limpa, responsiva e inspirada em layouts editoriais modernos.`,
      en: `Blog Angular is a news application built with Angular and TypeScript that consumes the News API to display current headlines. It explores components, services, directives and routes through a clean, responsive blog interface inspired by modern editorial layouts.`
    },
    techs: ['Angular', 'TypeScript', 'Vercel'],
    link: 'https://blog-angular-andre-horman.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/blog-angular'
  },
  {
    id: 8,
    title: 'GENIUS GAME',
    icon: '/images/lamp.png',
    type: 'Web Site',
    imgUrl: '/images/genius-game.png',
    description: {
      pt: `Genius Game é uma versão web do clássico Simon Game, criada com React, TypeScript e Tailwind CSS. O jogo desafia o usuário a memorizar e repetir sequências de cores e sons, com navegação por rotas e feedback visual claro para tornar a experiência rápida e envolvente.`,
      en: `Genius Game is a web version of the classic Simon Game built with React, TypeScript and Tailwind CSS. It challenges players to memorize and repeat color-and-sound sequences, with routed screens and clear visual feedback for a fast, engaging experience.`
    },
    techs: [
      'React JS',
      'React Router DOM',
      'TypeScript',
      'Tailwind CSS',
      'SweetAlert2',
      'Vercel'
    ],
    link: 'https://genius-game-react.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/genius-game'
  },
  {
    id: 9,
    title: 'JOGO DA VELHA',
    icon: '/images/tic-tac.svg',
    type: 'Web Site',
    imgUrl: '/images/tic-tac-toe.png',
    description: {
      pt: `Jogo da Velha é uma implementação em HTML, CSS e JavaScript Vanilla do clássico tabuleiro 3x3. O projeto trabalha lógica de turnos, detecção de vitória e reinício de partida em uma interface direta, leve e responsiva para partidas rápidas entre dois jogadores.`,
      en: `Tic-tac-toe is a vanilla HTML, CSS and JavaScript implementation of the classic 3x3 board game. It handles turn logic, win detection and match reset in a lightweight, responsive interface for quick two-player rounds.`
    },
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    link: 'https://tic-tac-toe-vanilla.vercel.app/',
    repo: 'https://github.com/ANDREHORMAN1994/tic-tac-toe'
  }
];

export const getLocalizedProject = (
  project: Project,
  language: Language
): LocalizedProject => ({
  ...project,
  description: project.description[language]
});

export const getLocalizedProjects = (language: Language): LocalizedProject[] =>
  myProjetcs.map(project => getLocalizedProject(project, language));

export default myProjetcs;
