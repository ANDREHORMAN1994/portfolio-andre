import { type ReactElement, useEffect, useState } from 'react';
import { MdTranslate } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container, LanguageButton } from './styles';

const SWITCHER_BOTTOM_OFFSET = 20;

export function LanguageSwitcher(): ReactElement {
  const { language, setLanguage, text } = useLanguage();
  const router = useRouter();
  const [footerOffset, setFooterOffset] = useState(0);
  const isProjectDetailsPage = router.pathname === '/projects/[id]';

  useEffect(() => {
    const updateFooterOffset = (): void => {
      const footer = document.querySelector('footer');

      if (footer == null) {
        setFooterOffset(0);
        return;
      }

      const { top } = footer.getBoundingClientRect();
      const nextOffset = Math.max(0, window.innerHeight - top);

      setFooterOffset(nextOffset);
    };

    updateFooterOffset();

    window.addEventListener('scroll', updateFooterOffset, { passive: true });
    window.addEventListener('resize', updateFooterOffset);

    return () => {
      window.removeEventListener('scroll', updateFooterOffset);
      window.removeEventListener('resize', updateFooterOffset);
    };
  }, []);

  return (
    <Container
      $footerOffset={footerOffset}
      $bottomOffset={SWITCHER_BOTTOM_OFFSET}
      $isProjectDetailsPage={isProjectDetailsPage}
      aria-label={text.language.selectorLabel}
    >
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
