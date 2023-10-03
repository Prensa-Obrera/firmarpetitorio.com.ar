import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
      <>
        <Head>
          <title>Firmarpetitorio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="La vivienda es un derecho" />
          <meta name="description" content="Sumá tu firma" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://firmarpetitorio.com.ar/viviendaCABA" />
          <meta property="og:title" content="La vivienda es un derecho" />
          <meta property="og:description" content="Sumá tu firma" />
          {/* <meta property="og:image" content="https://metatags.io/images/meta-tags.png" /> */}


          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://firmarpetitorio.com.ar/viviendaCABA" />
          <meta property="twitter:title" content="La vivienda es un derecho" />
          <meta property="twitter:description" content="Sumá tu firma" />
          {/* <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" /> */}
        

        <h1 className={styles.title}>
          Firmarpetitorio.com.ar
        </h1>

        <p><Link href="/santa-cruz">Absolución Santa Cruz</Link></p>

       
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
