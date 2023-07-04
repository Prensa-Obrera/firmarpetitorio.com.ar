import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
      <>
        <Head>
          <title>Firmarpetitorio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Firmarpetitorio.com.ar
          </h1>
          <p><Link href="/santa-cruz" className={styles.link}>Absolución Santa Cruz</Link></p>
        </main>
      </>
  );
}
