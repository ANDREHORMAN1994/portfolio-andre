import { ThemeProvider } from 'styled-components';

import { useState } from 'react';
import GlobalStyles from '../styles/global';
import { themeDark, themeLight } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [status, setStatus] = useState(false);

  return (
    <ThemeProvider theme={status ? themeLight : themeDark}>
      <Component {...pageProps} status={status} setStatus={setStatus} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
