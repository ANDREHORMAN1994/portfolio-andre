import { type AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import { themeDark, themeLight } from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [status, setStatus] = useState<boolean>(false);

  return (
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
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
