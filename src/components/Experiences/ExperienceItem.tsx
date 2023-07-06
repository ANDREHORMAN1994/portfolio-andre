import { ReactNode } from 'react';
import { ItemContainer } from './styles';

interface ItemProps {
  year: string;
  status: string;
  description: string;
}

function ExperienceItem({ year, status, description }: ItemProps): ReactNode {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{status}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperienceItem;
