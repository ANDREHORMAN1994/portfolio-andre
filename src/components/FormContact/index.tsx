import { ReactElement } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from '../Title';
import Form from './Form';
import { Container } from './styles';

interface FormsProps {
  status: boolean;
}

export function FormContact({ status }: FormsProps): ReactElement {
  const { text } = useLanguage();

  return (
    <Container>
      <Title
        title={
          <>
            {text.contact.titleFirstLine}
            <br />
            {text.contact.titleSecondLine}
          </>
        }
        description={text.contact.subtitle}
      />

      <Form status={status} />
    </Container>
  );
}
