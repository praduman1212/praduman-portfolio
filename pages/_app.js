import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Praduman's 3D Portfolio - Full Stack Developer" />
        <meta name="keywords" content="portfolio, 3D, web development, react, three.js, next.js" />
        <meta name="author" content="Praduman" />
        <title>Praduman | Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
