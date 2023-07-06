import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiMysql, DiNodejsSmall } from 'react-icons/di';
import { FaCss3Alt, FaDocker, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiJest, SiMongodb, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { TbBrandCypress } from 'react-icons/tb';
import { CarouselItem } from './types';

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
    title: 'JS',
    icon: <IoLogoJavascript />
  },
  {
    id: 3,
    title: 'React',
    icon: <FaReact />
  },
  {
    id: 4,
    title: 'Jest',
    icon: <SiJest />
  },
  {
    id: 5,
    title: 'RTL',
    icon: <SiTestinglibrary />
  },
  {
    id: 6,
    title: 'Cypress',
    icon: <TbBrandCypress />
  },
  {
    id: 7,
    title: 'Redux',
    icon: <SiRedux />
  },
  {
    id: 8,
    title: 'NodeJS',
    icon: <DiNodejsSmall />
  },
  {
    id: 9,
    title: 'MySQL',
    icon: <DiMysql />
  },
  {
    id: 10,
    title: 'MongoDB',
    icon: <SiMongodb />
  },
  {
    id: 11,
    title: 'Docker',
    icon: <FaDocker />
  },
  {
    id: 12,
    title: 'Git / Github',
    icon: <AiFillGithub />
  }
];

export default items;
