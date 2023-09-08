import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
      <>
        <Head>
          <title>Firmarpetitorio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Sumá tu firma" key="desc" />
          <meta property="og:title" content="La vivienda es un derecho" />
          <meta
            property="og:description"
            content="Sumá tu firma"
          />
          <meta
            property="og:image"
            content="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png"
          />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Firmarpetitorio.com.ar
          </h1>
          <p><Link href="/viviendaCABA" className={styles.link}>Vivienda CABA</Link></p>
        </main>
      </>
  );
}
