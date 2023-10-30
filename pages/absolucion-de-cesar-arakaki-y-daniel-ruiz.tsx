import Head from "next/head";
import styles from "../styles/pages.module.scss";

export default function AbsolucionArakakiRuiz() {
  return (
    <>
      <Head>
        <title>Absolucion de Cesar Arakaki y Daniel Ruiz</title>
        <meta name="description" content="Sumá tu firma" />

        <meta
          property="og:title"
          content="Absolucion Cesar Arakaki y Daniel Ruiz"
        />
        <meta property="og:description" content="Sumá tu firma" />
        <meta
          property="og:image"
          content="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png"
        />
        <meta
          property="og:url"
          content="https://firmarpetitorio.com.ar/absolucion-de-cesar-arakaki-y-daniel-ruiz"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          Absolucion de Cesar Arakaki y Daniel Ruiz
        </h1>

        <p className={styles.texto}>
          En una instancia decisiva, nos pronunciamos nuevamente por la
          absolución de César Arakaki y Daniel Ruiz Los abajo firmantes nos
          pronunciamos por la absolución de César Arakaki y Daniel Ruiz,
          acusados por su participación en la movilización del 18 de diciembre
          de 2017 contra la pérfida reforma previsional votada ese día en el
          Congreso. Denunciamos que el Juez Feliciano Ríos confirmó la sentencia
          de 3 años y 4 meses de prisión para César Arakaki, que implica una
          pena de prisión efectiva, a pesar del planteo de la Cámara de Casación
          de revisar la condena.
        </p>
        <p className={styles.texto}>
          Esta ratificación apunta a hacer efectiva una condena sin pruebas,
          arbitraria y que representa un enorme retroceso para las libertades
          democráticas en el país. Se lo condena por intimidación pública, un
          cargo que tiene hasta 6 años de prisión y que de quedar firme
          resultaría un gravísimo precedente para el movimiento popular. La
          condena por lesiones se confirma incluso cuando el policía herido que
          presentó la querella retiró la acusación al probar que César no lo
          agredió. Hemos presentado nuevos recursos de apelación contra esta
          sentencia arbitraria y antidemocrática.
        </p>
        <p className={styles.texto}>
          Las movilizaciones masivas de diciembre de 2017 fueron una reacción
          masiva frente a una ley confiscatoria contra las jubilaciones. Con
          esta sentencia, se pretende golpear la capacidad del pueblo argentino
          de luchar contra este tipo de reformas.
        </p>
        <p className={styles.texto}>
          Llamamos a apoyar la causa por la absolución, en una instancia
          decisiva cuando se pretende hacer efectiva la condena y acompañamos
          las movilizaciones que se realizarán por este reclamo.
        </p>
      </div>
      <iframe
        className={styles.formMautic}
        src="//federicoe.ar/form/24"
        width="100%"
        height="580px"
      ></iframe>
    </>
  );
}
