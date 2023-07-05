import NextProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { themeDark, themeLight } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [status, setStatus] = useState(false);

  return (
    <ThemeProvider theme={status ? themeLight : themeDark}>
      <NextProgress
        color={status ? themeLight.primary : themeDark.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} status={status} setStatus={setStatus} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
