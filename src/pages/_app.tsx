import { AppProps } from 'next/app';
// import { AppProps, NextWebVitalsMetric } from 'next/app';
import withTwindApp from '@twind/next/app';
import twindConfig from '@/twind.config';
import Head from 'next/head';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/700-italic.css';
import '@fontsource/poppins/900.css';
import '@fontsource/poppins/900-italic.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>HM Internusa</title>
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        html,
        body {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          background: #f3f3fd;
        }
      `}</style>
    </>
  );
}

export default withTwindApp(twindConfig, MyApp);
