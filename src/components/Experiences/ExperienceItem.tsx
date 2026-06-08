import { ReactElement } from 'react';
import { MdOutlineBusiness } from 'react-icons/md';
import { ItemContainer } from './styles';

interface ItemProps {
  year: string;
  status: string;
  organization: string;
  description: string;
  width?: string;
}

function ExperienceItem({
  year,
  status,
  organization,
  description,
  width = '100%'
}: ItemProps): ReactElement {
  return (
    <ItemContainer data-aos="fade-up" $width={width}>
      <div>
        <h1>{year}</h1>
        <h2>{status}</h2>
        <h3>
          <MdOutlineBusiness aria-hidden="true" />
          {organization}
        </h3>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

ExperienceItem.defaultProps = {
  width: '100%'
};

export default ExperienceItem;
