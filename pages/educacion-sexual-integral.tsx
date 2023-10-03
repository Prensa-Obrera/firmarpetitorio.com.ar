import Head from "next/head";
import styles from "../styles/pages.module.scss";

export default function ESI() {
  return (
    <>
      <Head>
        <title>ESI</title>
        <meta name="description" content="Sumá tu firma" />

        <meta property="og:title" content="Defensa de la ESI" />
        <meta property="og:description" content="Sumá tu firma" />
        <meta
          property="og:image"
          content="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png"
        />
        <meta
          property="og:url"
          content="https://firmarpetitorio.com.ar/educacion-sexual-integral"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Educacion Sexual Integral</h1>

        <p className={styles.texto}>
          Lxs abajo firmantes reclamamos la modificación de la ley N° 26.150, de
          Educación Sexual Integral, para que deje de ser una ley de adhesión y
          sea declarada de orden público y, por lo tanto, de carácter
          obligatorio en todo el territorio nacional. Exigimos que el Congreso
          Nacional trate de manera urgente esta iniciativa antes de diciembre de
          este año.
        </p>
        <p className={styles.texto}>
          Desde que la ley se sancionó hace 17 años, ningún gobierno garantizó
          su implementación, sino que es el esfuerzo y la voluntad de docentes y
          estudiantes lo único que sostiene la ESI en los pocos colegios e
          instituciones educativas donde se aplica.
        </p>
        <p className={styles.texto}>
          El cumplimiento de este derecho no puede quedar en manos de los
          gobiernos provinciales ni de la voluntad de enfrentarse a las iglesias
          del próximo gobierno nacional, cualquiera sea su signo político.
        </p>
        <p className={styles.texto}>
          Defendemos una educación sexual laica, científica y respetuosa de las
          diversidades. Rechazamos la avanzada derechista que busca reforzar el
          oscurantismo, la discriminación y las violencias.
        </p>
      </div>
      <iframe
        className={styles.formMautic}
        src="//federicoe.ar/form/21"
        width="100%"
        height="400px"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </>
  );
}
