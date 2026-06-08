import { type AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';
import { type ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { LanguageProvider } from '@/contexts/LanguageContext';
import GlobalStyles from '../styles/global';
import { themeDark, themeLight } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <LanguageProvider>
      <ThemeProvider theme={status ? themeLight : themeDark}>
        <NextProgress
          color={status ? themeLight.primary : themeDark.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} status={status} setStatus={setStatus} />
        <LanguageSwitcher />
        <GlobalStyles />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
