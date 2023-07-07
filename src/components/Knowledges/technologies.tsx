import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiMysql, DiNodejsSmall } from 'react-icons/di';
import { FaCss3Alt, FaDocker, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { GiHook } from 'react-icons/gi';
import {
  SiJest,
  SiMongodb,
  SiRedux,
  SiTestinglibrary,
  SiNextdotjs
} from 'react-icons/si';
import { TbBrandCypress } from 'react-icons/tb';
import { type CarouselItem } from './types';

const items: CarouselItem[] = [
  {
    id: 0,
    title: 'HTML',
    icon: <AiFillHtml5 />
  },
  {
    id: 1,
    title: 'CSS',
    icon: <FaCss3Alt />
  },
  {
    id: 2,
    title: 'JavaScript',
    icon: <IoLogoJavascript />
  },
  {
    id: 3,
    title: 'React JS',
    icon: <FaReact />
  },
  {
    id: 4,
    title: 'Next JS',
    icon: <SiNextdotjs />
  },
  {
    id: 5,
    title: 'Hooks',
    icon: <GiHook />
  },
  {
    id: 6,
    title: 'Jest',
    icon: <SiJest />
  },
  {
    id: 7,
    title: 'RTL',
    icon: <SiTestinglibrary />
  },
  {
    id: 8,
    title: 'Cypress',
    icon: <TbBrandCypress />
  },
  {
    id: 9,
    title: 'Context API',
    icon: <FaReact />
  },
  {
    id: 10,
    title: 'Redux',
    icon: <SiRedux />
  },
  {
    id: 11,
    title: 'NodeJS',
    icon: <DiNodejsSmall />
  },
  {
    id: 12,
    title: 'MySQL',
    icon: <DiMysql />
  },
  {
    id: 13,
    title: 'MongoDB',
    icon: <SiMongodb />
  },
  {
    id: 14,
    title: 'Docker',
    icon: <FaDocker />
  },
  {
    id: 15,
    title: 'Git / Github',
    icon: <AiFillGithub />
  }
];

export default items;
