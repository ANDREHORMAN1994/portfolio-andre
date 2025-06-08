import { ReactElement } from 'react';
import { ItemContainer } from './styles';

interface ItemProps {
  year: string;
  status: string;
  description: string;
  width?: string;
}

function ExperienceItem({
  year,
  status,
  description,
  width = '100%'
}: ItemProps): ReactElement {
  return (
    <ItemContainer data-aos="fade-up" width={width}>
      <div>
        <h1>{year}</h1>
        <h2>{status}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

ExperienceItem.defaultProps = {
  width: '100%'
};

export default ExperienceItem;
