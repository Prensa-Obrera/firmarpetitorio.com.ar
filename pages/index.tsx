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
        
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Firmarpetitorio.com.ar
          </h1>
          <p><Link href="/viviendaCABA" className={styles.link}>Vivienda CABA</Link></p>
        </main>
        {/* <div className={styles.imagen}>
          <img src="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png" />
        </div> */}
      </>
  );
}
