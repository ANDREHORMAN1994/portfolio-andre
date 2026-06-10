import { ReactElement } from 'react';
import { MdOutlineBusiness } from 'react-icons/md';
import { ItemContainer } from './styles';

interface ItemProps {
  year: string;
  status: string;
  organization: string;
  description: string[];
  width?: string;
}

function ExperienceItem({
  year,
  status,
  organization,
  description,
  width = '50%'
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
        <ul>
          {description.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ItemContainer>
  );
}

ExperienceItem.defaultProps = {
  width: '50%'
};

export default ExperienceItem;
