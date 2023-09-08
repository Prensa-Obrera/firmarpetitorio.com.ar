import styles from "../styles/viviendaCABA.module.scss";

export default function ViviendaCABA() {
    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.titulo}>Los abajo firmantes apoyamos las siguientes propuestas impulsadas por el Frente de Izquierda-Unidad en la ciudad para defender el derecho a la vivienda:</h1> 
        
            <ul className={styles.listado}>
                <li><b>1.</b> Regulación del valor de los alquileres: una vivienda adecuada para una familia tipo no
                puede superar el valor de un salario mínimo, vital y móvil.</li>
                <li><b>2.</b> Impuesto progresivo a la vivienda ociosa: hoy se calcula que hay alrededor de 200.000
                viviendas que podrían volcarse al alquiler.</li>
                <li><b>3.</b> Regulación del Airbnb prohibiendo alquileres temporarios de menos de un mes en viviendas vacías.</li>
                <li><b>4.</b> Créditos hipotecarios actualizados con tope en la evolución del salario para acceder a la
                vivienda propia.</li>
                <li><b>5.</b> Anulación del Código Urbanístico y de Edificación</li>
                <li><b>6.</b> Anulación de la privatización de más de 500 hectáreas de tierras para la especulación inmobiliaria.</li>
                <li><b>7.</b> Construcción de 100.000 viviendas populares en las tierras recuperadas.</li>
                <li><b>8.</b> Urbanización de todas las villas</li>
                <li><b>9.</b> Recuperación de la Costanera Norte y Sur con parques verdes públicos. No a las
                megatorres.</li>
                <li><b>10.</b> Aumento general de salarios y jubilaciones. Salario mínimo igual a la canasta familiar.</li>
            </ul>
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