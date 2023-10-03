import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firmar petitorio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="La vivienda es un derecho" />
        <meta name="description" content="Sumá tu firma" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://firmarpetitorio.com.ar/viviendaCABA"
        />
        <meta property="og:title" content="La vivienda es un derecho" />
        <meta property="og:description" content="Sumá tu firma" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://firmarpetitorio.com.ar/viviendaCABA"
        />
        <meta property="twitter:title" content="La vivienda es un derecho" />
        <meta property="twitter:description" content="Sumá tu firma" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Firmarpetitorio.com.ar</h1>

        <p className={styles.texto}>
          <Link href="/absolucion-santa-cruz">- Absolución Santa Cruz -</Link>
        </p>
        <p className={styles.texto}>
          <Link href="/viviendaCABA">- Vivienda CABA -</Link>
        </p>
        <p className={styles.texto}>
          <Link href="/educacion-sexual-integral">- ESI -</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
