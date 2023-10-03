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

        <p>
          <Link href="/absolucion-santa-cruz">Absolución Santa Cruz</Link>
        </p>
        <p>
          <Link href="/viviendaCABA">Vivienda CABA</Link>
        </p>
        <p>
          <Link href="/educacion-sexual-integral">ESI</Link>
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

      <style jsx>{`
        /* Estilos para el componente Home */
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          margin-left: 0.5rem;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        /* Estilos globales */
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
  );
}
