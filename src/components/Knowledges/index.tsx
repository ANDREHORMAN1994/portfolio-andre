import { useState, type ReactElement, useEffect } from 'react';
import Title from '../Title';
import Carrousel from './Carrousel';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';
import items from './technologies';
import { type Breaks } from './types';

const breakPoints: Breaks[] = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 }
];

export function Knowledges(): ReactElement {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      const isMobileDevice = window.matchMedia('(max-width: 700px)').matches;
      setIsMobile(isMobileDevice);
    };

    // Verifica a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um event listener para verificar a largura da janela em cada redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Title title="Conhecimentos" description="Hard Skills" />
      <section>
        <Carrousel
          breakPoints={breakPoints}
          isRTL={false}
          pagination={!isMobile}
          showArrows
        >
          {items.map(({ id, title, icon }) => (
            <KnowledgeItem key={id} title={title} icon={icon} />
          ))}
        </Carrousel>
      </section>
    </Container>
  );
}
