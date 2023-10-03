import Head from "next/head";
import styles from "../styles/pages.module.scss";

export default function AbsolucionSantaCruz() {
  return (
    <>
      <Head>
        <title>Absolucion en Santa Cruz</title>
        <meta name="description" content="Sumá tu firma" />

        <meta property="og:title" content="Absolucion en Santa Cruz" />
        <meta property="og:description" content="Sumá tu firma" />
        <meta
          property="og:image"
          content="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png"
        />
        <meta
          property="og:url"
          content="https://firmarpetitorio.com.ar/absolucion-santa-cruz"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Absolucion en Santa Cruz</h1>

        <p className={styles.texto}>
          Los abajo firmantes reclamamos el inmediato desprocesamiento y el cese
          de la persecución y criminalización contra Gabriela Ance (activista de
          ATE), Claudio Wasquin, Juan Manuel Valentín y Diego Barrionuevo
          (delegados y dirigentes de Adosac) por haber participado de la enorme
          huelga docente que tuvo lugar en 2017 en Santa Cruz.
        </p>
        <p className={styles.texto}>
          Más aún, rechazamos el reciente cambio de carátula a “intento de
          femicidio” e “intento de homicidio calificado” por haber participado
          de la movilización frente a la residencia de la gobernadora Alicia
          Kirchner en reclamo por aumento salarial.
        </p>
        <p className={styles.texto}>
          La imputación es una absurda banalización de la figura de femicidio
          que pretende ser utilizada contra el reclamo social. Se trata de una
          afrenta contra las luchas que libramos por Ni Una Menos y contra un
          régimen de violencias que nada tiene que ver con quienes defienden el
          salario de lxs trabajadorxs.
        </p>
        <p className={styles.texto}>
          Exigimos el inmediato desprocesamiento y cierre de la causa y el cese
          de toda persecución a lxs luchadorxs populares. ¡No manipulen nuestras
          luchas para perseguir compañerxs!
        </p>
      </div>
      <iframe
        className={styles.formMautic}
        src="//federicoe.tk/form/20"
        width="100%"
        height="1100px"
      ></iframe>
    </>
  );
}
