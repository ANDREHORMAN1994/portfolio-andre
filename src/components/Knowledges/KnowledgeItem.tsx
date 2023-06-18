import { ContainerItem } from './styles';
import CarouselItem from './types';

function KnowledgeItem({ title, icon }: CarouselItem) {
  return (
    <ContainerItem>
      <p>{title}</p>
      {icon}
    </ContainerItem>
  );
}

export default KnowledgeItem;
