import { ContainerItem } from './styles';
import CarouselItem from './types';

function KnowledgeItem({ title, icon }: CarouselItem) {
  return (
    <ContainerItem data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ContainerItem>
  );
}

export default KnowledgeItem;
