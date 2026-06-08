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
      pt: `A WebCam Emotions é uma aplicação desenvolvida em React JS utilizando a Face API para reconhecimento facial. Com esta aplicação, você poderá ver em tempo real, por meio de sua webcam, como as expressões faciais se relacionam com diferentes emoções, como felicidade, tristeza, surpresa e raiva.`,
      en: `WebCam Emotions is a React JS application that uses Face API for facial recognition. Through your webcam, it lets you see in real time how facial expressions relate to emotions such as happiness, sadness, surprise and anger.`
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
      pt: `O Clone GPT é uma aplicação desenvolvida em Next JS utilizando a API da OpenAI para gerar textos de maneira natural. O intuito é que o usuário possa conversar com o bot, fazendo perguntas e recebendo respostas.`,
      en: `Clone GPT is a Next JS application that uses the OpenAI API to generate natural language text. Users can chat with the bot, ask questions and receive answers.`
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
      pt: `O Pixel Art Game é um jogo desenvolvido para plataformas Desktop e Mobile que proporciona aos jogadores a experiência única de criar pinturas em estilo de 8 ou 16 bits. Agora, você pode elevar o desafio ao pintar quadros pixelados o mais rápido possível, com base em pinturas de referência, visando conquistar mais pontos. Sua pontuação será exibida na tela de classificação, incentivando a competição e o aprimoramento constante.`,
      en: `Pixel Art Game is a desktop and mobile game where players create 8-bit or 16-bit style paintings. The challenge is to reproduce pixelated reference images as quickly as possible to earn more points. Scores appear on a leaderboard, encouraging competition and continuous improvement.`
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
      pt: `A Pokédex Vanilla é uma aplicação Web desenvolvida com HTML5, CSS3 e JavaScript. Ela permite que os usuários visualizem informações sobre os 151 primeiros Pokémon, como nome, tipo, altura, peso e habilidades.`,
      en: `Pokédex Vanilla is a web application built with HTML5, CSS3 and JavaScript. It lets users view information about the first 151 Pokémon, including name, type, height, weight and abilities.`
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
      pt: `O Happy é uma aplicação Desktop desenvolvida para facilitar a integração entre a comunidade e lares de acolhimento. Essa plataforma permite que os usuários busquem locais cadastrados em um mapa interativo fornecido pelo Leaflet. Além disso, os usuários têm a possibilidade de adicionar informações como horários de atendimento, descrição para público alvo, localização e instruções para visita. Tudo sendo conectado com um banco de dados PostgreSQL.`,
      en: `Happy is a desktop application designed to connect communities with care homes. Users can find registered locations on an interactive Leaflet map and add details such as opening hours, audience descriptions, locations and visiting instructions. The application is connected to a PostgreSQL database.`
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
      pt: `A Slido API oferece recursos para o cadastro de usuários e para o gerenciamento completo de perguntas e respostas dos clientes. Com ela, é possível realizar um CRUD completo, sendo capaz de criar, visualizar, editar e remover cada pergunta ou resposta cadastrada. Além disso, a Slido API permite que os usuários realizem login como cliente ou admin, facilitando o controle de acesso e a gestão de permissões. Com essa funcionalidade, é possível garantir a segurança e a privacidade dos dados cadastrados na plataforma.`,
      en: `Slido API provides user registration and complete customer question-and-answer management. It supports full CRUD operations to create, view, edit and remove registered questions or answers. Users can also sign in as clients or admins, simplifying access control and permission management while protecting platform data.`
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
      pt: `O Memory Game DBZ é uma aplicação Web desenvolvida em ReactJS, que consiste em um jogo da memória com os personagens do anime Dragon Ball Z. A aplicação possui uma tela inicial de Login e uma tela de jogo, onde o usuário deve encontrar os pares de cartas iguais com o menor tempo possível.`,
      en: `Memory Game DBZ is a ReactJS web application featuring a memory game with characters from the Dragon Ball Z anime. It includes a login screen and a game screen where players must find matching card pairs as quickly as possible.`
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
      pt: `O Blog Angular é uma aplicação Web desenvolvida em Angular, que consome a News API para exibir as principais notícias do momento. O projeto foi desenvolvido com o intuito de praticar os conceitos básicos do Angular, como componentes, diretivas, serviços, rotas, entre outros.`,
      en: `Blog Angular is an Angular web application that consumes the News API to display current headlines. The project was built to practice Angular fundamentals such as components, directives, services and routes.`
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
      pt: `O Genius Game também conhecido como Simon Game é um jogo de memória que desafia os jogadores a repetirem sequências de cores e sons. Este jogo foi desenvolvido utilizando tecnologias de ponta como React JS, Typescript e Tailwind CSS.`,
      en: `Genius Game, also known as Simon Game, is a memory game that challenges players to repeat color and sound sequences. It was developed with React JS, TypeScript and Tailwind CSS.`
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
      pt: `O Jogo da Velha é um jogo de tabuleiro de dois jogadores, X e O, que alternam entre si marcando os espaços em um tabuleiro 3x3. O jogador que conseguir colocar três de suas marcas em uma linha horizontal, vertical ou diagonal, vence o jogo. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript Vanilla.`,
      en: `Tic-tac-toe is a board game for two players, X and O, who take turns marking spaces on a 3x3 grid. The first player to place three marks in a horizontal, vertical or diagonal row wins. This project was developed with HTML, CSS and vanilla JavaScript.`
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
