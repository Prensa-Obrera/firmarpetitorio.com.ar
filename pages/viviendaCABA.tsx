import Head from "next/head";
import styles from "../styles/viviendaCABA.module.scss";


export default function ViviendaCABA() {
    return (
        <>
        <Head>
            <title>La vivienda es un derecho.</title>
            <meta name="description" content="Sumá tu firma" />

            <meta property="og:title" content="La vivienda es un derecho" />
            <meta property="og:description" content="Sumá tu firma" />
            <meta property="og:image" content="https://po.org.ar/wp-content/uploads/2023/09/lapiz.png" />
            <meta property="og:url" content="https://firmarpetitorio.com.ar/viviendaCABA" />
        </Head>
        <div className={styles.container}>
            <h1 className={styles.titulono}>La vivienda es un derecho</h1> 

            <h1 className={styles.titulo}>Los abajo firmantes consideramos que la VIVIENDA ES UN DERECHO, motivo por el cual reclamamos al gobierno y a la legislatura de la Ciudad de Buenos Aires:</h1> 
            
            <p className={styles.texto}>Creación de un Fondo para el Derecho a la Vivienda constituido con  impuestos a la vivienda ociosa, impuesto a los negocios constituidos sobre la base de beneficios del Estado y a las transacciones financieras.</p>
            <p className={styles.texto}>Derogación del Código Urbanístico que habilitó la construcción desenfrenada de edificios para reserva del valor o para alquileres temporarios afectando la impronta de los barrios porteños, elevando el valor de la tierra y provocando una retracción de la colocación de la vivienda en alquiler.</p> 
            <p className={styles.texto}>Creación de un plan de créditos hipotecarios subsidiados para el acceso a la vivienda de las y los trabajadores. Creación de un banco de tierras de la Ciudad para la puesta en pie de un plan de viviendas. </p>
            <p className={styles.texto}>Regulación del mercado de alquileres temporarios, tope de 90 días al año para alquilar, registro de los inmuebles, prohibición de publicación de viviendas no registradas y prohibición para que se alquilen viviendas completas.</p> 
            <p className={styles.texto}> Ampliación del subsidio habitacional para las familias con ingresos por debajo de la línea de pobreza.</p>
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