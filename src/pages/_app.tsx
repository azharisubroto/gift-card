import { AppProps } from 'next/app';
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
        <title>Gift Card</title>
      </Head>

      {/* Component render */}
      <Component {...pageProps} />

      {/* css in js */}
      <style global jsx>{`
        :root {
          --font-size-sm: clamp(0.6rem, 0.78vw + 0.4rem, 1.03rem);
          --font-size-base: clamp(0.75rem, 1.14vw + 0.47rem, 1.38rem);
          --font-size-md: clamp(0.94rem, 1.63vw + 0.53rem, 1.83rem);
          --font-size-lg: clamp(1.17rem, 2.31vw + 0.59rem, 2.44rem);
          --font-size-xl: clamp(1.46rem, 3.26vw + 0.65rem, 3.26rem);
          --font-size-xxl: clamp(1.83rem, 4.56vw + 0.69rem, 4.34rem);
          --font-size-xxxl: clamp(2.29rem, 6.36vw + 0.7rem, 5.79rem);
        }
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
