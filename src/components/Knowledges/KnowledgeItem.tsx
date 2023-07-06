import { ReactNode } from 'react';
import { ContainerItem } from './styles';
import { CarouselItem } from './types';

function KnowledgeItem({ title, icon }: CarouselItem): ReactNode {
  return (
    <ContainerItem data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ContainerItem>
  );
}

export default KnowledgeItem;
