import { type ReactElement } from 'react';
import { MdTranslate } from 'react-icons/md';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container, LanguageButton } from './styles';

export function LanguageSwitcher(): ReactElement {
  const { language, setLanguage, text } = useLanguage();

  return (
    <Container aria-label={text.language.selectorLabel}>
      <MdTranslate aria-hidden="true" />
      <LanguageButton
        $active={language === 'pt'}
        aria-label={text.language.portuguese}
        aria-pressed={language === 'pt'}
        type="button"
        onClick={() => {
          setLanguage('pt');
        }}
      >
        <span aria-hidden="true">🇧🇷</span>
        <span>PT</span>
      </LanguageButton>
      <LanguageButton
        $active={language === 'en'}
        aria-label={text.language.english}
        aria-pressed={language === 'en'}
        type="button"
        onClick={() => {
          setLanguage('en');
        }}
      >
        <span aria-hidden="true">🇺🇸</span>
        <span>EN</span>
      </LanguageButton>
    </Container>
  );
}
